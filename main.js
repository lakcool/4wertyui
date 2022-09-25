var SpeechRecognition = window.webkitSpeechRecognition;
/*window.webkitURLSpeechRecognition is a web speech api used 
to recognize what is said and convert it into speech*/
var recognititon = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognititon.start()
}
recognititon.onresult = function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
}
