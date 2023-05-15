document.querySelector('#btn').addEventListener('click',function(e){
let p1=Math.floor(1+6*Math.random());
let p2=Math.floor(1+6*Math.random());
let dice=document.querySelector('#dice1');
dice.setAttribute('src',`Diceimages/D${p1}.png`);
dice=document.querySelector('#dice2');
dice.setAttribute('src',`Diceimages/D${p2}.png`);
let msg=document.querySelector('#result')
if(p1>p2){
    msg.innerText='Player 1 Wins';
}
else if(p1<p2){
    msg.innerText='Player 2 Wins';
}
else{
    msg.innerText='Match Tied Try Again';
}
});
