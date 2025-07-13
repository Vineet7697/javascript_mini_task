let emoji= ["😀", "😎", "😂", "🥺", "😍", "🤖", "👻", "🦄", "🐶", "🍕", "🚀", "🌈", "🔥", "🎉", "🥳"];

let btn=()=>{
    let randomEmoji=Math.floor(Math.random()*emoji.length)
    document.querySelector("#emoji").textContent=emoji[randomEmoji]
}