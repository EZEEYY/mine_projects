image = document.getElementById("image")
let images = ["rock.png","paper.png","scissor.png"];
document.getElementById("rock").addEventListener('click',()=> image.src = images[0])
document.getElementById("paper").addEventListener('click',()=> image.src= images[1])
document.getElementById("scissor").addEventListener('click', ()=>image.src = images[2])

let playerscore=0;
let computerscore=0;

let playerchoice;
let playerconst = document.querySelectorAll(".choice")
playerconst.forEach(button=> button.addEventListener("click",()=>{
    player = button.textContent;
    
    compchoice();
    brain();
}))


function compchoice(){

        let comp = Math.floor(Math.random()*3);
        //console.log(comp)
        document.getElementById('compchoice').src = images[comp];
        switch(comp){
            case 0:
                computer="Rock";
                break;
            case 1:
                computer="Paper"
                break;
            case 2:
                computer="Scissor"
                break;
        }
    
        return comp;
}      



function brain (){
    
    if(player==computer){
        document.getElementById('dis').innerHTML = "DRAW"
        return;
    }
    else if(player=="Rock" && computer=="Scissor"){
        document.getElementById('dis').innerHTML = "YOU WON"
        playerscore++;
        updatescore();
        return;
    }
    else if(player=="Scissor" && computer=="Paper"){
        document.getElementById('dis').innerHTML = "YOU WON"
        playerscore++;
        updatescore();
        return;

    }
    else{
        document.getElementById("dis").innerHTML = "YOU LOSE"
        computerscore++;
        updatescore();
        return;

    }
}

function updatescore(){
    let play=document.querySelector('.player')
    let compt=document.querySelector('.computer')
    compt.textContent = computerscore;
    play.textContent = playerscore;

}
