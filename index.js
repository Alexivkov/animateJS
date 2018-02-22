var element = document.getElementById('box');

var keyframes = [
    {transform: 'rotate(0)'},
    {transform: 'rotate(360deg)'}
]

var timings = {
    duration: 1000,
    easing: 'linear',
    iterations: Infinity

}

var player = element.animate(keyframes, timings);


//button click
document.getElementById('stop').onclick = function(){
    if(player.playState == 'running'){
        player.pause();
        this.innerHTML = 'Воспроизвести'
    }else {
        player.play();
        this.innerHTML = 'Остановить'
    }
}



//uskorenie zamedlenie
element.addEventListener('click',function(){
    player.playbackRate += 0.3;
})

setInterval(function(){
    if(player.playbackRate < 0.1) playerbackRate = 0;
    else player.playbackRate -=0.1;
},500)


/*
// предупреждение об остановке
player.onfinish = function(){
alert('Finished');
}
*/

var element1 = document.querySelector('#square');
player1 = element1.animate([
        {transform:'translate(0,0)'},
        {transform:'translate(300px,0)'},
    ],{
        iterations: Infinity,
        duration:1000,
        direction: 'alternate'
    }
);

document.querySelector('#speed').onchange = function(){
    player1.playbackRate = this.value
}

var element3 = document.getElementById('ball');

var minX = 0;
var maxX = 300;
var pos = 0;
var dir = 1;
var speed = 4;
var fps = 60;
var setTimeoutID;
var animationFrameID;

function animateBall(){
    setTimeout(function(){

        animationFrameID = 		window.requestAnimationFrame(animateBall);
        pos = element3.getBoundingClientRect().left;
        if(pos > maxX || pos < minX){
            dir = - dir;
        }
        element3.style.left = (pos + dir * speed) + "px";
    },1000/fps)
}
window.requestAnimationFrame(animateBall);
