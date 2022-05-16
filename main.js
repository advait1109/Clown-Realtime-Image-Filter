function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save('my_clown_picture.png');
}
function model_loaded(){
    console.log("Model Initialized")
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
        console.log(results[0].pose.leftWrist.x);
        console.log(results[0].pose.leftWrist.y)
    }
}