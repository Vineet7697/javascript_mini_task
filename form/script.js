let valid=()=>{
    let Name=document.querySelector("#name").value.trim()
    let Num=document.querySelector("#num").value.trim()
    let Email=document.querySelector("#mail").value.trim()
    let Pass=document.querySelector("#pass").value.trim()
    let Cpass=document.querySelector("#cpass").value.trim()



    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let errmail=document.querySelector("#errmail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    errname.innerHTML=""
    errnum.innerHTML=""
    errmail.innerHTML=""
    errpass.innerHTML=""
    errcpass.innerHTML=""
 

    // Errors of Name
    if (Name=="") {
        errname.innerHTML="*Please enter your name";
        return false;
    }

    // Errors of Number
    else if(Num==""){
        errnum.innerHTML="*Please enter you number";
        return false;
    }

    else if(Num.length!=10){
        errnum.innerHTML="*Please enter 10 digits"
        return false;
    }

    else if(isNaN(Num)){
        errnum.innerHTML="*Please enter numbers only";
        return false;
    }


    // Errors of Email
    else if(!(Email.includes('@') && Email.includes('.com'))){
        errmail.innerHTML="*please enter you email";
        return false;
    }


    // Errors of Password
    
     else if(Pass==""){
        errpass.innerHTML="*plese enter password"
        return false
    }
    else if(Cpass==""){
        errcpass.innerHTML="*please confirm password"
        return false
    }
    else if(Pass!=Cpass){
        errcpass.innerHTML="*please enter same  password"
        document.querySelector("#cpass").value=""
        document.querySelector("#cpass").focus()
        return false;
    }


    
    else if(!(Pass.match(/[1234567890]/) &&
             Pass.match(/[!@#$%^&*()]/) &&
            Pass.match(/[a-z]/) &&
            Pass.match(/[A-Z]/)
        )){
        errpass.innerHTML="*please enter strong password";
        return false;
    }
   
}