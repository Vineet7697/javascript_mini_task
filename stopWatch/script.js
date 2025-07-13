let seconds=0;
let minutes=0;
let hours=0;
let interval=null;

let Display=()=>{
    let h=hours<10? '0' + hours:hours
    let m=minutes<10? '0' + minutes:minutes
    let s=seconds<10? '0' + seconds:seconds
    document.querySelector("#display").innerHTML=`${h}:${m}:${s}`
}

let timer=()=> {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
     Display();
    }
let start=()=>{
    if(!interval){
        interval=setInterval(timer,1000);
    }
}

let stop=()=>{
    clearInterval(interval)
    interval=null;
}

let reset=()=>{
stop()
seconds=0;
minutes=0;
hours=0;
Display()
}