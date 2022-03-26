//deposite money after clicking submit deposite button
document.getElementById('deposite-btn').addEventListener('click', function(){
    //get deposite input money
    const depositeInput = document.getElementById('deposite-input');
    //get deposite total money
    const depositeCurrent = document.getElementById('deposite-total');
    //convert string to number
    const depositeAmount = parseFloat(depositeInput.value);
    const depositeTotal = parseFloat(depositeCurrent.innerText)
    //add inputed deposit money
    const depositeMoney = depositeTotal + depositeAmount;
    depositeCurrent.innerText = depositeMoney;
    //add deposit money in balance
    const balanceCurrent = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceCurrent.innerText);
    const balanceSumDeposite = balanceTotal + depositeAmount;
    balanceCurrent.innerText = balanceSumDeposite;
    //clear deposite input
    depositeInput.value = '';
})

//withdraw money after clicking submit withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //get withdraw input money
    const withdrawInput = document.getElementById('withdraw-input');
    //get withdraw total money
    const withdrawCurrent = document.getElementById('withdraw-total');
    //conver string to number
    const withdrawAmout = parseFloat(withdrawInput.value);
    const withdrawTotal = parseFloat(withdrawCurrent.innerText);
    // add input money to withdraw
    const withdrawMoney = withdrawTotal + withdrawAmout;
    withdrawCurrent.innerText = withdrawMoney;
    //minus withdraw money from balance
    const balanceCurrent = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceCurrent.innerText);
    const balanceMinusWithdraw = balanceTotal - withdrawAmout;
    balanceCurrent.innerText = balanceMinusWithdraw;
    //clear withdraw input
    withdrawInput.value ='';
})