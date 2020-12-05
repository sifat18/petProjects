function rps(choice){
	console.log(choice);
	var s=choice.id;
	var humanch, botchoic;
	humanch=choice.id;
	botchoic= rpsCheck(randmm());
	result= decide(humanch,botchoic);
	msg=gen(result);
	showcase(s,botchoic,msg);

}

function randmm(){
	return Math.floor(Math.random()*3);
}
function rpsCheck(num){
	return ['rock','paper','sci'][num];
}

function decide(humanch,botchoic){
	var scenerio={
		'rock':{'sci':1, 'paper':0, 'rock':0.5},
		'paper':{'sci':0, 'paper':0.5, 'rock':1},
		'sci':{'sci':0.5, 'paper':1, 'rock':0}
	};

	var hscore=scenerio[humanch][botchoic];
	var bscore=scenerio[botchoic][humanch];
	return [hscore, bscore];
}

function gen([hs,bs]){
	if(hs === 0){
		return {'message':"you lost", 'color':'red'};
	}else if(hs === 0.5){
		return {'message':"its a draw",'color':'yellow'};
	}else{
		return {'message':"U Won",'color':'green'};
	}
}

function showcase(hmc,botc,msg){

	var im={
		'rock': document.getElementById('rock').src,
		'sci': document.getElementById('sci').src,
		'paper': document.getElementById('paper').src
	};



	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('sci').remove();

	var hmdiv=document.createElement('div');
	var botdiv=document.createElement('div');
	var msgg=document.createElement('div');

	hmdiv.innerHTML="<img src='" + im[hmc] +"' height= 250 width= 200 style='box-shadow:0px 10px 50px rgb(30,50,231,44);'>"
	msgg.innerHTML="<h1 style='color: "+ msg['color']+"; font-size:2rem; padding:50px;'>"+msg['message']+"</h1>"
	botdiv.innerHTML="<img src='" + im[botc] +"' height= 250 width= 200 style='box-shadow:0px 10px 50px rgb(110,160,11,44);'>"
	
	document.getElementById('rps').appendChild(hmdiv);
	document.getElementById('rps').appendChild(msgg);
	document.getElementById('rps').appendChild(botdiv);
	
	setTimeout(function(){
   window.location.reload(1);
}, 900);
}