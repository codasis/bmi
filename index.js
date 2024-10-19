let button=document.querySelector("#btn")
button.addEventListener("click",function(){
    let h=parseInt(document.querySelector("#h").value);
    let w=parseInt(document.querySelector("#w").value);
    // console.log(w);
    let m=(h/37.39)
    let final=w/(m*m)
    let output=document.querySelector("#output")
    output.innerHTML=final;
    if(final<18.5){
        output.innerHTML="<b>Your BMI is: </b>"+final+"<br> You are under weight"
        output.style.backgroundColor="rgb(64, 64, 238)"
    }
    else if(final>=18.5 && final<24.9){
        output.innerHTML="<b>Your BMI is: </b>"+final+"<br> You are fit"
        output.style.backgroundColor="rgb(46, 223, 46)"
    }
    else if(final>=24.5 && final<=29.9){
        output.innerHTML="<b>Your BMI is: </b>"+final+"<br> You are over weight"
        output.style.backgroundColor="rgb(245, 92, 36)"
    }
    else if(final>=30){
        output.innerHTML="<b>Your BMI is: </b>"+final+"<br> You are suffering obesity"
        output.style.backgroundColor="red"
    }


})