Webcam.set({
    height:300,width:350,image_format:"png",png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach(camera)

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src="+data_uri+">"
    })
}
console.log("ml5version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json",modelloaded)

function modelloaded(){
    console.log("model is loaded")
}

function speak(){
    var synth=window.speechSynthesis
    speakdata1="the first prediction is"+prediction1
    speakdata2="and the second prediction is"+prediction2
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis)
}