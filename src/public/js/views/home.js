const home = {
    "render":()=>{
        let html = `
    <div class="showcase">
        <div class="showcase-image">
            <img src="default/profile.jpg" alt="" srcset="" width="40%">
        </div>
        <div class="showcase-description">
            <p>An Single Page Application made with Vanilla Javascript, featuring my favourites things: cars!!</p>
            <p>Navigate throught the links and see it working like a charm :) <3 </p>
            <p>Made by Héber Júlio: <a href="https://github.com/kurogai" style="text-decoration: none; color: blueviolet;">Github</a></p>
        </div>
    </div>
        `;
        return html;
    }
}
export { home };