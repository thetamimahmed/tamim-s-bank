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
