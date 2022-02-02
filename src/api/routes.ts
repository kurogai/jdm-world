import { request, Router } from "express";
import path from "path";
import { upload } from "./controllers/imageHandler";
import { jdm } from "./models/jdm";
const router = Router();

router.get("/",(request, response)=>{
    response.sendFile(path.join(__dirname,"../views","index.html"));
});

router.get("/v1/image",(request, response)=>{
    jdm.findAll().then((result)=>{
        if(result)response.send(result);
        else response.status(200);
    }).catch((e)=>{
        console.error(e);
    })
});

router.post("/v1/image",upload.single("image"),(request,response)=>{
    let file = request.file;
    if(!file){
        response.send("Please select an file!!");
    }else{
        jdm.create({
            name:request.body.name,
            url:"/uploads/"+request.file!.filename
        }).then(()=>{
            response.sendStatus(200);
        }).catch((e)=>{
            console.error(e);
            response.sendStatus(500);
        })  
    }
});

export { router };