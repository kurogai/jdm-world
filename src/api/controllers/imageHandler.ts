import { Hash } from "crypto";
import { MD5 } from "crypto-js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"../../public/uploads/"));
    },
    filename:(req,file,cb)=>{
        cb(null,MD5(file.fieldname + (Math.random() * 100).toString()).toString());
    }
});

let upload = multer({storage:storage});
export { upload };