const bart = document.getElementById('bart')
const bartprop = bart.getBoundingClientRect();
const width = bartprop.left + bartprop.width/2;
const height = bartprop.top + bartprop.height/2
console.log(width,height)
const eyes  = document.querySelectorAll('.eyes')


function position(x, y, width, height){
    const dx = -x+width;
    const dy = -y+height;
    const rad = Math.atan2(dy,dx)
    const deg = rad*180/Math.PI
    return deg
}

window.addEventListener('mousemove',(e)=>{
    const x =  e.clientX;
    const y = e.clientY;
    console.log(x,y)
    const pos = position(x,y,width,height)
    //console.log(pos)
    eyes.forEach(eyes => {
        eyes.style.transform = `rotate(${90+pos}deg)`
        
    });
})

