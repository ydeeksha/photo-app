var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
     recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML="Content";

    console.log(event);

    speak();
}

function speak()
{
var synth = window.Synthesis;
 speak_date = document.getElementById("textbox").innerHTML;
 var utterThis = new SpeechSynthesisUtterance(speak_date);
 synth.speak(utterThis);
 Webcam.attach(camera);
}
camera = document.getElementById("camera");
webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality : 90
});
