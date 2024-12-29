let boxes=document.querySelectorAll(".box")
let whole=document.querySelector(".msg-container")
let hh=document.querySelector("hide")
let nnnn=document.querySelector(".winner")
let hello=document.querySelector(".newgame-btn")
let aprilmay=document.querySelector(".button-btn")
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
 ];

 let turn0=true;

const resetbt=()=>{
    turn0=true;
    enablebtn();
    whole.classList.add(`msg-container`)
}
const disablebtn=()=>{
    for(let sur of boxes){
        sur.disabled=true;
    }
}

const enablebtn=()=>{
    for(nn of boxes){
        nn.disabled=false;
        nn.innerHTML=""
    }
}


 




const callback=(suraj)=>{
    nnnn.innerText=`congrtulation the winner is ${suraj}`;
    whole.classList.remove(`msg-container`)
    disablebtn();
}



 const checkwinner=()=>{
    for(winner of winpattern){
    let posi1val=boxes[winner[0]].innerText
    let posi2val=boxes[winner[1]].innerText
    let posi3val=boxes[winner[2]].innerText
    if(posi1val!=""&&posi2val!=""&&posi3val!=""){
        if(posi1val==posi2val&&posi2val==posi3val){
            callback(posi1val);
    }
}}
 }


boxes.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(turn0){
            element.innerHTML="x"
            turn0=false
        }else{
            element.innerHTML="o"
            turn0=true
        }
        element.disabled=true;
        checkwinner();
    })
})


hello.addEventListener("click",resetbt);
aprilmay.addEventListener("click",resetbt)