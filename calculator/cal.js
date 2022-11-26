


function input(htm){
    const value = htm.value //takes value of the buttons and aasign to value
    console.log(value)
    dis(value)
    display = document.getElementById('process').innerHTML
    //moving(display)

}
//const arr=[]
let str = '';


function dis(value){
    console.log(value*3)
    str = str + value // adds value obtained to the string
    //arr.push(value)
    //str = arr.join('')
    document.getElementById('process').innerHTML = str //displays the string in the screen

    document.getElementById('erase').onclick = ()=>{
        str =  str.slice(0,-1)
        document.getElementById('process').innerHTML = str //displays the sliced string in the screen


    
    }
    
}  

document.getElementById('equals').onclick = ()=>{
    const ans = eval(str) //evaluates

    document.getElementById('ans').innerHTML = ans  //displays ans
    //arr=[];
    str='' //empties the string

} 



