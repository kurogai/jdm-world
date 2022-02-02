import { router } from "./router.js";

window.onload = async ()=>{
    let elements = document.getElementsByTagName("a");
    await router("/"); // default location
    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener("click", async(e)=>{
            let path = elements[i].href.slice(elements[i].href.lastIndexOf("/"),elements[i].href.length);
            window.location.hash = path;
            await router(path);
            e.preventDefault();
        });
    }
}