import { home } from "./views/home.js";
import { cars } from "./views/cars.js";
import { upload } from "./views/upload.js";
import { uploadForm } from "./controllers/uploadForm.js";
import { updateGallery } from "./controllers/updateGallery.js";

const router = async(route)=>{
    let main = document.getElementsByTagName("main")[0];
    switch(route){
        case "/":
            main.innerHTML = home.render();
            break;
        case "/cars":
            main.innerHTML = cars.render();
            updateGallery();
            break;
        case "/upload":
            main.innerHTML = upload.render();
            await uploadForm();
            break;
        default:
            break;
    }
}

export { router };