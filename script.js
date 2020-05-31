var randnum=(Math.floor(Math.random() * 10 + 1));
var lifes = 5;
document.getElementById("life").innerHTML  = "Lifes"+lifes;
function checkguess(){
  var num=document.getElementById("number").value;
  alert(randnum)
  if (num==randnum){
alert("You Win!");
alert("+ 1 point")
  }
  else{
    lifes = lifes - 1
    document.getElementById("life").innerHTML  = "-1 point..."+ lifes;

alert("You Lost A Life...")
  }
}
