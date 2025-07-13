let show=()=>{
    let text1=document.querySelector("#inp1").value
    let text2=document.querySelector("#inp2").value
    let text3=document.querySelector("#sum")
    let Sum=parseInt(text1)+parseInt(text2)
    text3.innerHTML=Sum
}