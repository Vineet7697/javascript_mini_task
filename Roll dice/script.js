let Dice=()=>{
    let dice1=document.querySelector("#dice1")
    let dice2=document.querySelector("#dice2")
    let dice3=document.querySelector("#dice3")
    let dice4=document.querySelector("#dice4")
    let dice5=document.querySelector("#dice5")
    let dice6=document.querySelector("#dice6")
    let dice=document.querySelector("#dice")

    let dice1b=document.querySelector("#dice1b")
    let dice2b=document.querySelector("#dice2b")
    let dice3b=document.querySelector("#dice3b")
    let dice4b=document.querySelector("#dice4b")
    let dice5b=document.querySelector("#dice5b")
    let dice6b=document.querySelector("#dice6b")
    let diceb=document.querySelector("#diceb")
    let randomNumber1=Math.floor(1+ Math.random()*6)
    let randomNumber2=Math.floor(1+ Math.random()*6)


    dice.style.display="none";
    diceb.style.display="none"; 


if(randomNumber1===1){
dice1.style.display = "block";
dice2.style.display="none";
dice3.style.display="none";
dice4.style.display="none";
dice5.style.display="none";
dice6.style.display="none";


}
else if(randomNumber1===2){
dice2.style.display = "block";
dice1.style.display="none";
dice3.style.display="none";
dice4.style.display="none";
dice5.style.display="none";
dice6.style.display="none";
}
 else if(randomNumber1===3){
dice3.style.display = "block";
dice2.style.display="none";
dice1.style.display="none";
dice4.style.display="none";
dice5.style.display="none";
dice6.style.display="none";

}
else if(randomNumber1===4){
dice4.style.display = "block";
dice2.style.display="none";
dice3.style.display="none";
dice1.style.display="none";
dice5.style.display="none";
dice6.style.display="none";

}
else if(randomNumber1===5){
dice5.style.display = "block";
dice2.style.display="none";
dice3.style.display="none";
dice4.style.display="none";
dice1.style.display="none";
dice6.style.display="none";

}
 else{
dice6.style.display = "block";
dice2.style.display="none";
dice3.style.display="none";
dice4.style.display="none";
dice5.style.display="none";
dice1.style.display="none";

}


//second dice 
if(randomNumber2===1){
dice1b.style.display = "block";
dice2b.style.display="none";
dice3b.style.display="none";
dice4b.style.display="none";
dice5b.style.display="none";
dice6b.style.display="none";


}
else if(randomNumber2===2){
dice2b.style.display = "block";
dice1b.style.display="none";
dice3b.style.display="none";
dice4b.style.display="none";
dice5b.style.display="none";
dice6b.style.display="none";

}
 else if(randomNumber2===3){
dice3b.style.display = "block";
dice2b.style.display="none";
dice1b.style.display="none";
dice4b.style.display="none";
dice5b.style.display="none";
dice6b.style.display="none";

}
else if(randomNumber2===4){
dice4b.style.display = "block";
dice2b.style.display="none";
dice3b.style.display="none";
dice1b.style.display="none";
dice5b.style.display="none";
dice6b.style.display="none";

}
else if(randomNumber2===5){
dice5b.style.display = "block";
dice2b.style.display="none";
dice3b.style.display="none";
dice4b.style.display="none";
dice1b.style.display="none";
dice6b.style.display="none";

}
 else{
dice6b.style.display = "block";
dice2b.style.display="none";
dice3b.style.display="none";
dice4b.style.display="none";
dice5b.style.display="none";
dice1b.style.display="none";

}
 }
