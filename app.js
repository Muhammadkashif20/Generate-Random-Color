
var Button = document.getElementById("btn");
var showBox = document.getElementById("showBox");
var box=document.getElementById('box')
Button.addEventListener("click", function () {
  var genNumber1 = Math.floor(Math.random() * 255);
  var genNumber2 = Math.floor(Math.random() * 255);
  var genNumber3 = Math.floor(Math.random() * 255);
  var result=showBox.innerText ="rgb" + "(" + genNumber1 + "," + genNumber2 + "," + genNumber3 + ")";
  if(Button){
    box.style.backgroundColor=result
  }
});
function copyBtn() {
var copybtn=document.getElementById('copy')
   var copyText=copybtn=showBox.innerText
console.log(copyText);
}

