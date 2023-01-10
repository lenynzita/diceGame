// function randomNumber1(min, max){
//     return Math.floor(Math.random()* (max-min + 1)+min)
// }
// const rndInt = randomNumber1(1, 6);
let randomNumber1 =  Math.floor(Math.random() * 6 ) + 1; // 1-6

let randomDiceImg = "dice" + randomNumber1 + ".png"; //dice1.png =dice6.png

let randomImageSrc  = "images/" + randomDiceImg; //images/dice1.png-images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);

//Randomazing the second image.
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🎉 Player 1 WINS!!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🎉 Player 2 WINS!!";
}
else{
    document.querySelector("h1").innerHTML = "DRAWS!";
}


