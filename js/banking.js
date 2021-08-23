document.getElementById('diposit-button').addEventListener('click', function () {

    // Get The Ammount

    const dipositinput = document.getElementById('Diposit-input');
    const newdipositammount = dipositinput.value;

    const dipositTotal = document.getElementById('Diposit-ammount');
    const previousDipositAmmount = dipositTotal.innerText;

    const newDipositTotal = parseFloat(previousDipositAmmount) + parseFloat(newdipositammount);

    dipositTotal.innerText = newDipositTotal;

    dipositinput.value = '';

    // update Balance 

    const balancetotla = document.getElementById('balance-ammount');
    const balanceTotaltext = balancetotla.innerText;
    const previousBalanceTotl = parseFloat(balanceTotaltext);

    const newBalanceTotal = previousBalanceTotl + parseFloat(newdipositammount);

    balancetotla.innerText = newBalanceTotal;

})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInmput = document.getElementById('withdraw-input');
    const withdrawammountText = withdrawInmput.value;

    const newWithdrawAmmount = parseFloat(withdrawammountText);

    //set withdraw ammount 

    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawtotal = previousWithdrawTotal + newWithdrawAmmount;

    withdrawTotal.innerText = newWithdrawtotal;


    //Update balance 

    const balancetotal = document.getElementById('balance-ammount');
    const previousBalancetext = balancetotal.innerText;

    const previousBalanceTotal = parseFloat(previousBalancetext);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;

    balancetotal.innerText = newBalanceTotal;



    //clear data 

    withdrawInmput.value = '';








})