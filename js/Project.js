

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

    const PlayerRate=document.getElementById('plyer-input');
    const playerInputValueString=PlayerRate.value;        //player price
    const playerInputValue=parseFloat(playerInputValueString);
  

    const perPlayer=document.getElementById('Area-SelectV').childNodes;
   const perPlayerValue=perPlayer.length;
   
    const perPlayerExpense=perPlayerValue * playerInputValue;
    
    const playerTotalCost=document.getElementById('Plyer-TotalCost');
    const finalAmount=playerTotalCost.innerText =perPlayerExpense;

    
});



document.getElementById('Btn-totalCost').addEventListener('click',function(){
    //get manager coost output
    const inputManagerCost=document.getElementById('manager-cost');
    const managerCostValueString=inputManagerCost.value;
    const managerCostValue=parseFloat(managerCostValueString);

    //get coach cost output//
   
});


