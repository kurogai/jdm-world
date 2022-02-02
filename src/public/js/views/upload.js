const upload = {
    // I should have separated the CSS, but man, I'm too lazy for that!
    "render":()=>{
        let html = `
        <div id="upload">
        <form action="" method="post" enctype="multipart/form-data">
            <h1>Upload here!</h1>
            <p style="pad: 0px; margin: 0px; height: 100%;">Name</p>
            <input type="text" name="name" id="" style="
                width: 100%;
            ">
            <p>Attach image</p>
            <div id="upload_image">
                <div id="imagePreviewContainer" style="
                    min-width: 30vh; 
                    min-height: 30vh;
                    border-style: dashed;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    object-fit: cover;
                ">
                    <img src="#" alt="Preview here" id="imagePreview" width="500">
                </div>
                <p><input type="file" name="image" id="imageUpload" accept="image/*" style="
                        width: 100%;
                        text-align: center;
                    "></p>
            </div>
            <button type="submit" style="
                width: 100%;
                height: 100%;
                padding: 2%;
                background-color: rgb(107, 53, 64);
                color: whitesmoke;
            " id="sendImage">Upload Kitty</button>
        </form>
        </div>
        `;
        return html;
    }
}
export { upload };