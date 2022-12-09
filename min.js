var audioA=new Audio();
audioA.src ="audio/Basic_English_How_to_Pronounce_the_Letter_A.mp3"
var audioB=new Audio();
audioB.src ="audio/Basic_English_How_to_Pronounce_the_Letter_B.mp3"
var audioC=new Audio();
audioC.src ="audio/Basic_English_How_to_Pronounce_the_Letter_C.mp3"
var audioD=new Audio();
audioD.src ="audio/Basic_English_How_to_Pronounce_the_Letter_D.mp3"
var audioE=new Audio();
audioE.src ="audio/Basic_English_How_to_Pronounce_the_Letter_E.mp3"
var audioF=new Audio();
audioF.src ="audio/Basic_English_How_to_Pronounce_the_Letter_F.mp3"
var audioG=new Audio();
audioG.src ="audio/Basic_English_How_to_Pronounce_the_Letter_G.mp3"
$('.letterA').click(function(){
    audioA.play();
  });
$('.letterB').click(function(){
    audioB.play();
  });
$('.letterC').click(function(){
    audioC.play();
  });
$('.letterD').click(function(){
    audioD.play();
  });
$('.letterE').click(function(){
    audioE.play();
  });
$('.letterF').click(function(){
    audioF.play();
  });
$('.letterG').click(function(){
    audioG.play();
  });
function guesswhat() {
  var x = document.getElementById("guessthepic").value;
  console.log(x)
  console.log(typeof x)
  if(x=="dog"){
  document.getElementById("result").innerHTML = "yes that's true";
}else document.getElementById("result").innerHTML = "nope that's false";
}
function product() {
  var y = document.getElementById("productthenum").value;
  console.log(y)
  console.log(typeof y)
  if(y==24){
  document.getElementById("productresult").innerHTML = "yes that's true";
}else document.getElementById("productresult").innerHTML = "nope that's false";
}
var picture=document.getElementById("gamespic")
var pictures=['image/jigsaw-puzzle-game-with-kids-in-park-vector-18012079.jpg','image/welcome_to_chesskid.png','image/Bluey-Craft-Memory-game-970-x-615px.jpg']
setInterval(function (){
    var random=Math.floor(Math.random()*3) ;
    picture.src=pictures[random];
},500);









