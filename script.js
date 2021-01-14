//Challenge 5



let blackJackGame = {
    'you':{'scoreSpan':'#yourScore', 'div':'#user-side','score':0},
    'dealer':{'scoreSpan':'#dealerScore','div':'#bot-side','score':0}
};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];     
const hitSound = new Audio('C:\Users\Parthav\Desktop\JavaScript Program\Challenge 4\sounds\cash.mp3');
document.querySelector('#hit-button').addEventListener('click',blackJackHit);

function blackJackHit(){
    let cardImage = document.createElement('img');
    cardImage.src ='images/Q.png';
    document.querySelector(YOU['div']).appendChild(cardImage);
    hitSound.play();
}
