pbutton=document.querySelector(".play")
p2button=document.querySelector(".play2")
p3button=document.querySelector(".play3")
p4button=document.querySelector(".play4")
p5button=document.querySelector(".play5")
p6button=document.querySelector(".play6")

ar1=document.querySelector("#ar1")
ar2=document.querySelector("#ar2")
ar3=document.querySelector("#ar3")
ar4=document.querySelector("#ar3")
ar5=document.querySelector("#ar3")
ar6=document.querySelector("#ar3")
// 1
let value=false;
pbutton.addEventListener("click",()=>{
    if (ar1.paused){
    ar1.play();
    value=true
}else{
    ar1.pause()
}
})
//PRITAM  2
p2button.addEventListener("click",()=>{
    if (ar2.paused){
    ar2.play();
}else{
    ar2.pause()
}
})
// ARJITH 3
p3button.addEventListener("click",()=>{
    if (ar3.paused){
    ar3.play();
}else{
    ar3.pause()
}
})
// 4
p4button.addEventListener("click",()=>{
    if (ar4.paused){
    ar4.play();
}else{
    ar4.pause()
}
})
// 5
p5button.addEventListener("click",()=>{
    if (ar5.paused){
    ar5.play();
}else{
    ar5.pause()
}
})
// 6
p6button.addEventListener("click",()=>{
    if (ar6.paused){
    ar6.play();
}else{
    ar6.pause()
}
})

