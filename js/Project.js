

const NameArray=[];

function SelectedPlayerName(SelectName){
    const getSelectV=document.getElementById('Area-SelectV');
    getSelectV.innerText='';

for(let i=0; i < SelectName.length; i++ ){
    
    if(i == 5){
        alert('Sorry Selected List full');
        break;

    }else{
        const SelectedPlayer=SelectName[i].playerName;
        const li =document.createElement('li');
        li.innerHTML=
            `<li>${i+1} ${SelectedPlayer}</li>`;
        getSelectV.appendChild(li);
        
    }
    
}

}

function playerBtn(PLayer){
    
 const playerName= PLayer.parentNode.children[0].innerText;
    
const NameObject={
    playerName: playerName,
};
NameArray.push(NameObject);

SelectedPlayerName(NameArray);

}

// calculate per player cost//
document.getElementById('btn-calculate').addEventListener('click',function(){

    const PlayerRate=document.getElementById('player-input');
    const playerInputValueString=PlayerRate.value;        //player price
    const playerInputValue=parseFloat(playerInputValueString);
  

    const perPlayer=document.getElementById('Area-SelectV').childNodes;
   const perPlayerValue=perPlayer.length;
   
    const perPlayerExpense=perPlayerValue * playerInputValue;
    
    const playerTotalCost=document.getElementById('Player-TotalCost');
    playerTotalCost.innerText =perPlayerExpense;
    
    
});



function isplayerTotal(){

    const getPlayerTotal=document.getElementById('Player-TotalCost');
    const PlayerTotalString=getPlayerTotal.innerText;
    const Total=parseFloat(PlayerTotalString);
    if(isNaN(Total)){
        alert('Please input Number...');
        
    }
    else{
        return Total;
    }
    
    
}

function isManagerCost(){

    const inputManagerCost=document.getElementById('manager-cost');
    const managerCostValueString=inputManagerCost.value;
    const costForManager=parseFloat(managerCostValueString);

    if(isNaN(costForManager)){
        alert('Please input Number');

    }
    else{

        return costForManager;
    }
    
}

function isCoachCost(){

    const inputCoachCost=document.getElementById('coach-cost');
    const CoachCostString=inputCoachCost.value;
    const CostForCoach=parseFloat(CoachCostString);
    if(isNaN(CostForCoach)){
        alert('Please Input Number');
    }
    else{
        return CostForCoach;
    }
    

}


document.getElementById('Btn-totalCost').addEventListener('click',function(){
    
// get player cost
    const playerTotal=isplayerTotal();
    
//get manager cost output
   const managerCostValue= isManagerCost();

//get coach cost output//
    const CoachCost= isCoachCost();

// final calculate
    const lastCount=playerTotal + managerCostValue + CoachCost;
    
    const getUltimateExpense=document.getElementById('ultimate-cost');
    getUltimateExpense.innerText =lastCount;
    
     
});


