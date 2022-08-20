var scores , roundScore , activePlayer , gamePlaying ,lastDice ;
init();
// document.querySelector('#current--'+ activePlayer).textContent = dice;
// document.querySelector('#current--'+ activePlayer).innerHTML ='<em>' + dice + '</em>';


document.querySelector('.btn--roll').addEventListener('click',function(){
    if (gamePlaying){
        var dice1 = Math.floor((Math.random() *6)) + 1 ;
        var dice2 = Math.floor((Math.random() *6)) + 1 ;

        document.getElementById('dice1').style.display='block';
        document.getElementById('dice2').style.display='block';
        document.getElementById('dice1').src = 'dice-'+ dice1 + '.png';
        document.getElementById('dice2').src = 'dice-'+ dice2 + '.png';


        // if(dice==6 && (document.querySelector('.dice').textContent)==6){
        // if(dice==6 &&  lastDice==6){
        //     scores[activePlayer]=0;
        //     document.querySelector('#score--'+activePlayer).textContent = '0';
        //     nextPlayer();

        // }
        // var dicDom = document.querySelector('.dice');
        // dicDom.style.display = 'block';
        // dicDom.src = 'dice-'+ dice + '.png';
        if(dice1>1 && dice2>1){
            roundScore =(dice1+dice2);
            document.querySelector('#current--'+ activePlayer).textContent = roundScore;
    
        }
        else{
            nextPlayer();
            
        }
        // lastDice = dice;
    }

});

document.querySelector('.btn--hold').addEventListener('click' , function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score--'+activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.final--score').ariaValueMax;
        var winingScore;
        if (input){
            winingScore = input;
        }
        else{
            winingScore =100;
        }
        if ( scores[activePlayer] >= winingScore){
            gamePlaying=false;
            document.querySelector('#name--'+activePlayer).textContent = 'winner!!';
            document.querySelector('#dice1').style.display = 'none';
            document.querySelector('#dice2').style.display = 'none';
            document.querySelector('.player--'+activePlayer).classList.add('player--winner');
            document.querySelector('.player--'+activePlayer).classList.remove('player--active');
    
        }else{ nextPlayer();}
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0 ;
        document.getElementById('current--0').textContent= '0' ;
        document.getElementById('current--1').textContent= '0' ;
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        document.querySelector('#dice1').style.display = 'none';
        document.querySelector('#dice2').style.display = 'none';
}
document.querySelector('.btn--new').addEventListener('click' , init);

function init(){
gamePlaying=true;
scores = [0,0];
roundScore = 0 ;
activePlayer = 0 ;
document.querySelector('#dice1').style.display = 'none';
document.querySelector('#dice2').style.display = 'none';
document.getElementById('score--0').textContent= '0' ;
document.getElementById('score--1').textContent= '0' ;
document.getElementById('current--0').textContent= '0' ;
document.getElementById('current--1').textContent= '0' ;
document.getElementById('name--0').textContent = 'player1';
document.getElementById('name--1').textContent = 'player2';
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');

}