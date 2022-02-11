// get deposit input value
function getDepositAmountValue(inputId){
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  inputField.value = '';
  return amountValue;
}


// deposit button event handler

document.getElementById('deposit-button').addEventListener('click', function(){
  //-------- 1 -------------//
  // get Deposit input from function  
  const newDepositAmount = getDepositAmountValue('deposit-input');

  // get total deposit value / amount
  const depositTotal = document.getElementById('deposit-total');
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);

  const newDepositTotal = previousDepositAmount + newDepositAmount;
  // set input deposit value to total deposit
  depositTotal.innerText = newDepositTotal;

  // update account balance 
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;
})




// withdraw button event handler

document.getElementById('withdraw-button').addEventListener('click', function(){
  // --------- 2 ---------//
  // get withdraw amount from function 
  const newWithdrawAmount = getDepositAmountValue('withdraw-input');

  // get total withdraw value / money 
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawText);
  // add previous value + new value 
  const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
  // transfer total value into totalWithdraw 
  withdrawTotal.innerText = newWithdrawTotal;

  // Update totalBalance amount 
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  balanceTotal.innerText = newBalanceTotal;


  // empty value 
  // withdrawInput.value = '';

})











// Use Function for this Code

//----------- 1 -----------//
  // get deposit input & amount 
  // const depositInput = document.getElementById('deposit-input');
  // const newDepositAmountText = depositInput.value;
  // const newDepositAmount = parseFloat(newDepositAmountText);
//----------- 1 -----------//


//----------- 2 -----------//
  // get withdraw input 
  // const withdrawInput = document.getElementById('withdraw-input');
  // const newWithdrawAmountText = withdrawInput.value;
  // const newWithdrawAmount = parseFloat(newWithdrawAmountText);
//----------- 2 -----------//