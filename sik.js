let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice")
let msgpara=document.getElementById("msgp");
let userscorelem=document.querySelector("#userscore")
let compscorelem=document.querySelector("#compscore")
let msg=document.getElementById("msg");

// console.log(compscore)




// console.log(choices)
const playcom=()=>{
    const comchoice=["rock","paper","scissor"]
     const randidx =Math.floor(Math.random()*3)
     return comchoice[randidx]  // compuetr wil genetra random vlue index 
}
const draw=()=>{
    console.log("draw")
    msgpara.innerText="draw "
    msg.style.backgroundColor="rgb(8, 8, 8)"
    // msgpara.style.color="white"
}
const win=(choiceid,comch)=>{
    console.log("you win");
    msgpara.innerText=`you win your ${choiceid} beats ${comch}`;
    msg.style.backgroundColor="green"
    // msgpara.style.color="black"
    userscore++;
    userscorelem.innerText=userscore;
   
}

const loose=(choiceid,comch)=>{
    console.log("you loose");
    msgpara.innerText=`you loose ${choiceid} beats your ${comch}`;
      msg.style.backgroundColor="red"
    //    msgpara.style.color="black"
    compscore++;
    compscorelem.innerText=compscore;
   
}
// const winnershow=(userwin)=>{
//     if(userwi){
//         console.log("you win")
//     }
//     else{
//         console.log("you loose")
//     }
// }

const playgam=(choiceid)=>{
    console.log("user was clicked" ,choiceid)
    const comch= playcom()
    console.log("compuetr was clicked" ,comch)

    if(choiceid===comch){
        draw()
    }
    else{
        // let userwin=true;
        if (choiceid==="rock"){//computer will choose either paper or siecor
            userwin=comch==="scissor"?win(choiceid,comch):loose(choiceid,comch);
        }
           else if (choiceid==="paper"){//computer will choose either rock or siecor
                userwin=comch==="rock"?win(choiceid,comch):loose(choiceid,comch);
            }
       else{
            userwin=comch==="paper"?win(choiceid,comch):loose(choiceid,comch);
   }
   console.log(userwin)
    }
   

}

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click",()=>{
        const choiceid =choice.getAttribute("id")
        
        playgam(choiceid)
    })
    
});
