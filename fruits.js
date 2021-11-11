function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: " + "Detecting Objects";
}

img="";
status="";
function modelLoaded()
{
    console.log("model is loaded");
    status="true";
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }else{
        console.log(results);
        
    }
    
}

function preload()
{
img=loadImage("fruit_basket.jpg");
}

