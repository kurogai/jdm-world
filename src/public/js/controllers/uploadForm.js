const uploadForm = async ()=>{
    function notification(value){
        // create modal for the current image being uploaded
        let modal = document.createElement("div");
        modal.className = "notification";
        modal.style.width = "40vh";
        modal.style.height = "10vh";
        modal.style.margin = "1vh";
        modal.style.backgroundColor = "#FFCFD2"; 
        modal.style.borderColor = "#553E4E";
        modal.style.borderStyle = "dashed";
        modal.id = Math.floor(Math.random() * 100);

        let text = document.createElement("p");
        text.innerText = value;

        modal.appendChild(text);

        // create document inside the view
        document.getElementById("notification").appendChild(modal);
        
        // set Timeout for the specific id
        setTimeout(()=>{
            let deleteMe = document.getElementById(modal.id);
            deleteMe.remove();
        },7000);
    }

    function imagePreviewHandler(){
        let imageUpload = document.getElementById("imageUpload");

        imageUpload.onchange = (e)=>{
            const [files] = imageUpload.files;
            if(files) imagePreview.src = URL.createObjectURL(files);
        }
    }

    function imageUploadHandler(){
        let sendImage = document.getElementById("sendImage");
        sendImage.onclick = (e)=>{
            let [checkFile] = document.getElementById("imageUpload").files;
            if(!checkFile){
                alert("Please select any image!");
            }else{
                e.preventDefault();

                // start upload process
                let form = new FormData();
                let name = document.getElementsByName("name")[0];
                
                form.append("name",name.value);
                form.append("image",checkFile);

                // prepare and send
                let sendData = new XMLHttpRequest();
                sendData.open("post","/v1/image");
                sendData.onload = ()=>{
                    if(sendData.status == 200){
                        notification(`Uploaded sucessufly!`);
                    }else notification("Failed to upload");
                };

                sendData.send(form);

            }
            e.preventDefault();
        }
    }

    imagePreviewHandler();
    imageUploadHandler();
}

export { uploadForm };