
var dice,dice2,p1Score=0,p2Score=0,globalScore1=0,globalScore2=0,activePlayer=1;

document.getElementById("score_dis_p1").innerText=0;
document.getElementById("score_dis_p2").innerText=0;

if(activePlayer=1){

 document.querySelector('#dice_p1').addEventListener('click',p1_click);
 
}
if(activePlayer=2){
   
    document.querySelector('#dice_p2').addEventListener('click',p2_click); 
    
}
if(activePlayer=1){
    
     document.querySelector('#g_scr_p1').addEventListener('click',p1GScore);
    
    }

    if(activePlayer=2){
         
     document.querySelector('#g_scr_p2').addEventListener('click',p2GScore);  
     }   
   
   

function p1_click(){
    
    dice=Math.floor(Math.random()*6)+1;
    document.querySelector('#dice1').innerText=dice;  
    if(dice>1){
        
        p1Score=p1Score+dice;
        document.getElementById("score_dis_p1").textContent=p1Score;
    }
    else{
        p1Score=0;
        document.querySelector('#dice_p1').setAttribute("disabled",true);
        document.getElementById("score_dis_p1").textContent=0;
        activePlayer=2;
        document.querySelector('#dice_p2').removeAttribute("disabled");
    }
}


function p1GScore(){
    if(globalScore1<100){
    globalScore1=globalScore1+p1Score;
    document.getElementById("gscore_dis_p1").textContent=globalScore1;
    p1Score=0;
    }
    else{
        document.getElementById("gscore_dis_p1").textContent="WINNER";  
        document.querySelector('#dice_p1').setAttribute("disabled",true);
        document.querySelector('#dice_p2').setAttribute("disabled",true); 
        document.querySelector('#g_scr_p1').setAttribute("disabled",true);
        document.querySelector('#g_scr_p2').setAttribute("disabled",true); 
    }    
}

function p2_click(){
    
    dice2=Math.floor(Math.random()*6)+1;
    document.querySelector('#dice2').innerText=dice2;  
    if(dice2>1){
        
        p2Score=p2Score+dice2;
        console.log(p2Score);
        document.getElementById("score_dis_p2").textContent=p2Score;
    }
    else{
        p1Score=0;
        document.querySelector('#dice_p2').setAttribute("disabled",true);
        document.getElementById("score_dis_p2").textContent=0;
        activePlayer=1;
        document.querySelector('#dice_p1').removeAttribute("disabled");
    }
}
    function p2GScore(){
        //console.log("hii");
        if(globalScore2<100){
        globalScore2=globalScore2+p2Score;
        document.getElementById("gscore_dis_p2").textContent=globalScore2;
        p2Score=0;
        }
        else{
            document.getElementById("gscore_dis_p2").textContent="WINNER";  
            document.querySelector('#dice_p1').setAttribute("disabled",true);
            document.querySelector('#dice_p2').setAttribute("disabled",true); 
            document.querySelector('#g_scr_p1').setAttribute("disabled",true);
            document.querySelector('#g_scr_p2').setAttribute("disabled",true); 
        }
            
    }


