
let bjGame={
	'you':{'spanID': '#user', 'div':'#box1', 'score':0},
	'dealer':{'spanID': '#dealer', 'div':'#box3', 'score':0},
	'images':['2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','A.png','J.png','Q.png','k.png'],
	'imagesValue':{'2.png':2,'3.png':3,'4.png':4,'5.png':5,'6.png':6,'7.png':7,'8.png':8,'9.png':9,'10.png':10,'A.png':[1,11],'J.png':10,'Q.png':10,'k.png':10},
     'jita':0,
     'hara':0,
     'draws':0,
     'stand':false,
     'deal':false,
};

const YOU=bjGame['you']
const dealerr = bjGame['dealer']
const cardss=bjGame['images']
const value=bjGame['imagesValue']

const hsod = new Audio('swish.m4a')
const aww= new Audio('aww.mp3')
const cash= new Audio('cash.mp3')

// const www=bjGame['jita']
// const lll=bjGame['hara']
// const ddd=bjGame['draws']


document.querySelector("#hit").addEventListener('click',bjhit);


document.querySelector("#stand").addEventListener('click',dea);


function bjhit(){
	if(bjGame['stand']===false){
	let card=randomCard();
	hitshow(YOU,card);
	Score(card,YOU);
	console.log(YOU['score']);
	scoreMsg(YOU);
	
}}


function sleep(ms){
	return new Promise(resolve =>setTimeout(resolve,ms));
}

async function dea(){
	bjGame['stand']=true;
	while(dealerr['score']<16 && bjGame['stand']===true){
	let patti=randomCard();
	hitshow(dealerr,patti);
			Score(patti,dealerr);
		console.log(dealerr['score']);
		scoreMsg(dealerr);
		await sleep(1000);
}
	
		bjGame['deal']=true;
		show(winner());
	

}

function hitshow(who,card){
	if(who['score']<21){
	let cards=document.createElement('img');
	cards.src=card;
	document.querySelector(who['div']).appendChild(cards);
	hsod.play();
	// Score(card,YOU);
}}

document.querySelector("#deal").addEventListener('click',clean);

function clean(){
	// show(winner());

	if(bjGame['deal']===true){
		bjGame['stand']=false;
	 	let boximg=document.querySelector('#box1').querySelectorAll('img');
	let boximg2=document.querySelector('#box3').querySelectorAll('img');
	// console.log(boximg);
	for (let i = 0; i<boximg.length; i++){
		boximg[i].remove();

	};
	for (let i = 0; i<boximg2.length; i++){
		boximg2[i].remove();

	};
	YOU['score']=0;
	dealerr['score']=0;
	document.querySelector(YOU['spanID']).textContent=0;
	document.querySelector(dealerr['spanID']).textContent=0;
	document.querySelector(YOU['spanID']).style.color='white';
	document.querySelector(dealerr['spanID']).style.color='white';
	document.querySelector('#result-msg').textContent="Let's Play";
document.querySelector('#result-msg').style.color='black';
bjGame['deal']=false;
}
}

function randomCard(){
	let rand= Math.floor(Math.random()* cardss.length);
	return cardss[rand];

}


function Score(card,who){
	if(card==='A.png') { 

	if(who['score']+value[card][1] <= 21){
	who['score']+=value[card][1];	
	// document.querySelector(who['spanID']).textContent=who['score'];
	}else{
	who['score']+=value[card][0];
	// document.querySelector(who['spanID']).textContent=who['score'];
}}
else{
	who['score']+=value[card];
	
}
	
}

function scoreMsg(who){
	if(who['score']>21){
		document.querySelector(who['spanID']).textContent='BUSTED SUCKER!';
		document.querySelector(who['spanID']).style.color='red';
		aww.play();

}else{
	document.querySelector(who['spanID']).textContent=who['score'];
}}



function winner(){
	let win;
	if(YOU['score'] <= 21) {
		if((YOU['score'] > dealerr['score']) || (dealerr['score']>21)){
			win=YOU;
			// document.querySelector('#result-msg').textContent=;
			// document.querySelector('#result-msg').style.color='green';

		}else if(YOU['score'] < dealerr['score']){
			win=dealerr;
			// document.querySelector('#result-msg').textContent='You Lost';
			// document.querySelector('#result-msg').style.color='red';

		}else if(YOU['score'] === dealerr['score']){
			// document.querySelector('#result-msg').textContent='You Drew';
			// document.querySelector('#result-msg').style.color='yellow';

		}
	}else if(YOU['score'] > 21 && dealerr['score']<= 21){
			win=dealerr;
			document.querySelector('#result-msg').textContent='You Lost';
		}else if(YOU['score'] > 21 && dealerr['score']> 21){
			// document.querySelector('#result-msg').textContent='You Drew';
			// document.querySelector('#result-msg').style.color='yellow';
			
		}
	return win;
}

function show(win){
	let msg,co;
	if(bjGame['deal']===true){
if(win===YOU){
	msg='You WON';
	co='green';
	cash.play();
	bjGame['jita']++;
}else if (win===dealerr){
	msg='You lost';
	co='red';
	aww.play();
	bjGame['hara']++;
}else{
	msg='You drew';
	co='yellow';
	bjGame['draws']++;
}
document.querySelector('#result-msg').textContent=msg;
document.querySelector('#result-msg').style.color=co;

document.querySelector('#wins').textContent=bjGame['jita'];
document.querySelector('#loss').textContent=bjGame['hara'];
document.querySelector('#draw').textContent=bjGame['draws'];
			
}}