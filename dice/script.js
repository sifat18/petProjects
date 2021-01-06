const player1= document.querySelector('.box1');
const player2= document.querySelector('.box2');
let h1=document.querySelector('h1');
const btn=document.querySelector("button");

btn.addEventListener('click',gameLogic);



function gameLogic(){

let user1=9855+Math.floor(Math.random()*7);

let user2=9855+Math.floor(Math.random()*7);

player1.innerHTML="&#"+user1+";";
player2.innerHTML="&#"+user2+";";
console.log(user1,user2)
if(user1=== 9855 || user2===9855){
gameLogic();	
}
else if(user1===user2){
h1.textContent="DRAW!!"
}
else if(user1 > user2){
h1.textContent="Player 1 wins"
}
else{
	h1.textContent="Player 2 wins"
}

}

