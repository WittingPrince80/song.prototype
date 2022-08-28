//selection = ["otherside.mp3", "revvv.mp3", "strad.mp3" ];
/*song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;




function preload()
{
   song = loadSound(rev.mp3);

}
function setup()
{
  canvas = createCanvas(600,500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("on pose mode");
}



function gotPoses(results)
{
    if(results.length > 0)
    {
         console.log(results);
         leftWristX = results[0].pose.leftWrist.x;
         leftWristY = results[0].pose.leftWrist.y;
         console.log("leftwirist X= " +  leftWristX + "leftwirist Y = " +  leftWristY);

         rightWristX = results[0].pose.rightWrist.x;
         rightWristY = results[0].pose.rightWrist.y;
         console.log("rightwirist X= " + rightWristX + "rightwirist Y = " +  rightWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function selectre()
{

    song.pause();
    song.currentTime = 0;
    rn = Math.floor(Math.random()*2);
    console.log(rn);
    song = loadSound(selection[rn]);
}

function play()
{
    song.play;
    song.setVolume(1);
    song.rate(1);
    //selectre();
}*/
selection = ["spider.png ", "otherside.mp3", "revvv.mp3", "stal.mp3","boom.mp3","man.mp3","pig.mp3","zom.mp3" ];
song = "";
random_number = Math.floor(Math.random() * 8);
console.log(selection[random_number]);
change = false;

function preload()
{
	song = loadSound(selection[random_number]);
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	   console.log(results);
	   ScoreLeftWrist = results[0].pose.keypoints[9].score;
     console.log("LeftWrist Score Is " + ScoreLeftWrist);
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}

function draw() {
	image(video, 0, 0, 600, 500);
  fill("#FF0000");
  stroke("#FF0000");

  if (ScoreLeftWrist > 0.2)
  {
  circle(leftWristX, leftWristY,20);
  InNumberleftWristY = Number(leftWristY);
  remove_decimals = floor(InNumberleftWristY);
  volume = remove_decimals/400;
 document.getElementById("volume").innerHTML = "Volume = " + volume;
 song.setVolume(volume);
  }
}



function play()
{
  if(change == false)
  {
	song.play();
	song.setVolume(1);
	song.rate(1);
  change = true;
  }
   else
  {
     change = false;
    song.pause();
    song.currentTime = 0;
    random_number = Math.floor(Math.random()*2);
    console.log(selection[random_number]);
    song = loadSound(selection[random_number]);
    song.play();
    song.setVolume(1);
    song.rate(1);
  }

}