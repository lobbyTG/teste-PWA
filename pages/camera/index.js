let video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({video: true})
.then(stream =>{
    video.srcObject = stream;
    video.play();
})
.catch( err =>{
    console.log(err)
})

const foto = () =>{
    let canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    let context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
}