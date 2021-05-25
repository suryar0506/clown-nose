var nose_x, nose_y;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x - 20;
        nose_y = results[0].pose.nose.y - 20;
        console.log(nose_x);
        console.log(nose_y);
    }
}

function modelLoaded(){
    console.log("Posenet is up and ready to go!")
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(256,0,0);
    image(clown_nose, nose_x, nose_y, 40, 40);
}

function take_snapshot(){
    save('clown.png');
}