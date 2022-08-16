document.getElementById('btn-Deposit').addEventListener('click', function () {
    const DepositField = document.getElementById('deposit-field');
    const newdepositAmountString = DepositField.value;
    // console.log(depositAmount);
    const depositTotalElemnt = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElemnt.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    const newdepositAmount = parseFloat(newdepositAmountString);
    const currentDepositTotal = previousdepositTotal + newdepositAmount;
    depositTotalElemnt.innerText = currentDepositTotal;


    const balanceTotal = document.getElementById('balance-total');

    const previousbalanceTotalString = balanceTotal.innerText;
    const previousblanceTotal = parseFloat(previousbalanceTotalString);


    const currentTotalbalance = previousblanceTotal + newdepositAmount;
    balanceTotal.innerText = currentTotalbalance;

    DepositField.value = '';
})