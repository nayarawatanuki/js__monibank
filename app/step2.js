import { camera } from "./variables/camera.js";
import { sendPhoto, startVideo, takePhoto } from "./functions/step2/camera.js";

camera.start.addEventListener("click", () => 

    startVideo(camera.start, camera.input, camera.video));

camera.takePhoto.addEventListener("click", function() {

    takePhoto(camera.canvas, camera.video, camera.imageURL, camera.input, camera.message);
    console.log(camera.imageURL[0]);
})

camera.send.addEventListener("click", function() {

    
    sendPhoto(camera.imageURL[0]);
    window.location.href = "./step3.html";
    
});