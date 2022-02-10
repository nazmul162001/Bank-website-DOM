// deposit button event handler

document.getElementById('deposit-button').addEventListener('click', function(){
  // get deposit input & amount 
  const depositInput = document.getElementById('deposit-input');
  const newDepositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountText);

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
  // clear deposit input 
  depositInput.value = '';
  
})

// withdraw button event handler

document.getElementById('withdraw-button').addEventListener('click', function(){
  // get withdraw input 
  const withdrawInput = document.getElementById('withdraw-input');
  const newWithdrawAmountText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountText);

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
  withdrawInput.value = '';

})

