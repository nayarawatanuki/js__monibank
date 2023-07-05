async function startVideo(button, input, video) {

    const start = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    button.style.display = "none";
    input.style.display = "block";

    video.srcObject = start;
}

function takePhoto(canvas, video, imageURL, input, message) {

    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    imageURL.push(canvas.toDataURL("image/jpeg"));

    input.style.display = "none";
    message.style.display = "block";
}

function sendPhoto(imageURL) {
    
    const existingData = localStorage.getItem("register");
    const convertReturn = JSON.parse(existingData);

    convertReturn.image = imageURL;

    localStorage.setItem("register", JSON.stringify(convertReturn));
}

export { startVideo, takePhoto, sendPhoto }