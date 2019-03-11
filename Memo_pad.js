

var text1   = document.getElementById('textlead');
var text2   = document.getElementById('fileload');
var cpbtn   = document.getElementById('c&pbtn');
var dlt     = document.getElementById('dltbtn');

text1.value = "ƒƒ‚‚ğ‹L“ü‚µ‚Ä‚­‚¾‚³‚¢!!"

text2.addEventListener('change',function(evt){
   var file = evt.target.files;
   var reader = new FileReader();
   reader.readAsText(file[0]);
   
   reader.onload = function(ev){
       text1.value = reader.result;
       }
   },false);


function ShowLength( str ) {
   document.getElementById("inputlength").innerHTML = "“ü—Í”:" + str.length;
};

cpbtn.addEventListener('click', function(){
var work = text1.value;
text1.value += work;
});

dlt.addEventListener('click', function(){
var work = "";
text1.value = work;
});

function dlbutton() {
var text3   = document.getElementById("textlead").value;
if (window.navigator.userAgent.indexOf("Windows")) {
    text3 = text3.replace(/\n/g, "\r\n").replace(/\r\r/g, "\r") 
    }
var blob = new Blob([text3], { "type" : "text/plain" });
if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, "leadtext.txt");
    }
};

