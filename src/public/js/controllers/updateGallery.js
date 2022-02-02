const updateGallery = ()=>{
    async function requestImages(){
        let galleryContainer = document.querySelector(".cats-images-container");
        if(galleryContainer){
            let container = document.querySelector(".cats-images-container");
            let request = await fetch("/v1/image");
            let data = await request.json();

            Object.values(data).forEach((image)=>{
                let li = document.createElement("li");
                let img = document.createElement("img");

                img.alt = image.name;
                img.src = image.url;
                
                li.append(img);
                container.append(li);
            });
        }
    }
    requestImages();
}

export { updateGallery };