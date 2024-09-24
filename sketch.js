let capture;
let posNet;
let singlePoses,skeleton;
let nosex;
let nosey;
let leftEyex;
let leftEyey;
let rightEyex;
let rightEyey;


function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO);
    // capture.size(640, 480);
    capture.hide(); 

    posNet = ml5.poseNet(capture, modelReady);
    posNet.on('pose', receivedPoses);
}

function modelReady() {
    console.log('PoseNet Model Loaded');
}

function receivedPoses(poses) {
    if (poses.length>0){
        singlePoses=poses[0].pose;
        skeleton=poses[0].skeleton;
        console.log(skeleton)
       
        // nosex=sing.keypoints[0].position.x;
        // nosey=sing.keypoints[0].position.y;

        // leftEyex=sing.keypoints[1].position.x;
        // leftEyey=sing.keypoints[1].position.y;

        // rightEyex=sing.keypoints[2].position.x;
        // rightEyey=sing.keypoints[2].position.y;
       
    }

}

function draw() {
    image(capture, 0, 0 );
    if (singlePoses){
    for(let i=0; i<singlePoses.keypoints.length;i++){
            fill(i*25.7,i*74.5,i*12);
            ellipse(singlePoses.keypoints[i].position.x,singlePoses.keypoints[i].position.y,20,20);
    }
    stroke(255,0,0);
    strokeWeight(5);
    for (let j=0;j<skeleton.length;j++){
       
        line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y);
    }}
    
}







