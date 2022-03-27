//input value get function
function getInputValue(inputId){
    //get input money
    const inputField = document.getElementById(inputId);
    //convert string to number
    const inputAmount = parseFloat(inputField.value);
    //clear input
    inputField.value = '';
    return inputAmount;
}
//function of current balance
function getCurrentBalance(){
    const balanceCurrent = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceCurrent.innerText);
    return balanceTotal;
}
//function of update deposite and withdraw balance
function updateTotalField(totalFieldId, amount){
    //get total money
    const totalElement = document.getElementById(totalFieldId);
    const currentTotal = parseFloat(totalElement.innerText);
    //add inputed deposit money
    const totalMoney = currentTotal + amount;
    totalElement.innerText = totalMoney;
}
//function of update main balance
function updateBalance(amount, isAddition){
    //add money in balance
    const balanceCurrent = document.getElementById('balance-total');
    const balanceTotal = getCurrentBalance();
    if(isAddition == true){
        const balanceSum = balanceTotal + amount;
        balanceCurrent.innerText = balanceSum;
    }else{
        const balanceMinus = balanceTotal - amount;
        balanceCurrent.innerText = balanceMinus;
    }
}



//deposite money after clicking submit deposite button
document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeAmount = getInputValue('deposite-input');
    
    if(depositeAmount > 0){
        updateTotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }
    
   
})

//withdraw money after clicking submit withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');

    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
})