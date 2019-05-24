var current=0,activePlayer=0,gameActive=true;
var score=[0,0];

document.querySelector("#roll").addEventListener('click',function(){
    if(gameActive){
        var dice;
   
    dice=Math.floor(Math.random()*6)+1;
             document.querySelector("#dice").src="Alea_"+dice+".png";
    
     if(dice!==1)
     {

      current+=dice;
      document.querySelector("#score"+activePlayer).textContent=current;
     }
    else
        {  
            current=0;
         
         document.querySelector("#dice").src="Alea_"+dice+".png";
         document.querySelector("#score"+activePlayer).textContent=current;
            activePlayer=== 0 ? activePlayer=1 : activePlayer=0 ;
         document.querySelector('.p1').classList.toggle('active');
         document.querySelector('.p2').classList.toggle('active');
        }
        
        
    }
    
})
document.querySelector('#hold').addEventListener('click',function(){
    if(gameActive){
        
         score[activePlayer]+=current;
    document.querySelector('.scorecard'+activePlayer).textContent=score[activePlayer];
    document.querySelector("#score"+activePlayer).textContent=0;
    
     if(score[activePlayer]>=30)
         {
             document.querySelector('.name'+activePlayer).innerHTML='<h2><b>WINNER</b></h2>';
             gameActive=false;
         }
    else{
    activePlayer ===0? activePlayer=1:activePlayer=0;
    document.querySelector('.p1').classList.toggle('active');
         document.querySelector('.p2').classList.toggle('active');
    current=0;
    }
        
    }
    
    
  
})

document.querySelector('#newGame').addEventListener('click',init)

function init(){
    document.querySelector('.name'+activePlayer).innerHTML='<b>Player'+(activePlayer+1)+'</b>';
     current=0,activePlayer=0,gameActive=true;
score=[0,0];
document.querySelector('.p1').classList.add('active');
    document.querySelector('.p2').classList.remove('active');
    document.querySelector('.scorecard0').textContent=0;
        document.querySelector('.scorecard1').textContent=0;
}





