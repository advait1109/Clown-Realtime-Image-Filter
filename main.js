noseX=0;
noseY=0;
function preload(){
    clownNose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
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
    //fill('red');
    //stroke('red');
    //circle(noseX,noseY,20);
    image(clownNose,noseX-11,noseY-11,30,30)
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
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}