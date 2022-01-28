var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
// random will give number ranging from 0 to 0.99999...

var randomDiceImage1="https://abhijeet-dhumal.github.io/MyGames/images/inverted-dice-"+randomNumber1+".png";
var randomDiceImage2="https://abhijeet-dhumal.github.io/MyGames/images/inverted-dice-"+randomNumber2+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImage1);

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDiceImage2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins!!!";
}
else{
    document.querySelector("h1").innerHTML="Bingo, Draw!!!";
    
}
