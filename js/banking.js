// deposit button event handler

document.getElementById('deposit-button').addEventListener('click', function(){
  // get deposit input & amount 
  const depositInput = document.getElementById('deposit-input');
  const depositAmount = depositInput.value;
  // get total deposit value / amount
  const depositTotal = document.getElementById('deposit-total');
  // set input deposit value to total deposit
  depositTotal.innerText = depositAmount;

  // clear deposit input 
  depositInput.value = '';
  
})