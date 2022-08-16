document.getElementById('btn-Withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmoutSting = withdrawField.value;
    const newWithdrawAmout = parseFloat(newWithdrawAmoutSting);

    console.log(newWithdrawAmout);

    withdrawField.value = '';

    if (isNaN(newWithdrawAmout)) {
        alert('PLEASE, input correct number');
        return;
    }



    const withdrawTotalelement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalelement.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawTotalString);
    // console.log(previousWithdrawTotal);




    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousblanceTotal = parseFloat(previousbalanceTotalString);



    if (newWithdrawAmout > previousblanceTotal) {
        alert('THE BALANCE IS OVER THAN YOUR AMMOUNT');
        return;
    }


    const currentTotalWithdraw = newWithdrawAmout + previousWithdrawTotal;
    withdrawTotalelement.innerText = currentTotalWithdraw;



    const newbalanceTotal = previousblanceTotal - newWithdrawAmout;
    balanceTotalElement.innerText = newbalanceTotal;





})