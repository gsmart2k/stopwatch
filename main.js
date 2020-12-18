var sec = 0;
var min = 0;
var msec = 0;
var interval;

var handlesec = document.querySelector('.seconds')
var handlemin = document.querySelector('.minute')
var handlemsec = document.querySelector(".mseconds")
var record = document.querySelector(".record")
var timescont = document.querySelector(".times")
var times = document.querySelector(".ul-times")
var clear = document.querySelector(".clear")



 
function timer(){
    msec++;
    handlemsec.textContent = msec;
    if( msec >= 100 ){
        sec++;
        msec = 0
        handlesec.textContent = sec
    }else if(sec >= 60){
        min++
        sec = 0
        handlemin.textContent = min
    }
}

function start(){
   interval = setInterval(timer, 10)
    document.getElementById("btn").disabled = true

}
function stop(){
    clearInterval(interval)
    document.getElementById("btn").disabled = false
    // document.getElementById("btn").disabled = false
}
function reset(){
    var zero = 0;
    sec = 0;
    min = 0;
    msec = 0;
    handlesec.textContent = zero
    handlemsec.textContent = zero
    handlemin.textContent = zero
    stop();
}


clear.addEventListener("click",()=>{
    timescont.innerHTML = null
})

    



record.addEventListener('click',()=>{
    console.log(min,sec,msec)
    var innerHtml = ` ${min}m  ${sec}s  ${msec}ms `
    var li = document.createElement("li")
    li.classList = "litag"
    console.log(li)
    li.textContent = innerHtml
    console.log(li)
    times.append(li)

});

var litag = document.getElementsByClassName("litag")
for(var i = 0 ; i < litag.length; i++){
    litag[i].addEventListener("click", consolee)

}
window.onload(console.log("working"))

if(document.querySelector(".litag")){
    var letter = document.querySelector(".litag")
    letter.addEventListener("click",()=>{
        console.log('working')
    })
}else if(window.onload){

}


function consolee (){
    console.log('wowrking')
}
