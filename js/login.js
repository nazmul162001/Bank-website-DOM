document.getElementById('login-submit').addEventListener('click', function(){
  // get user email 
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;

  // get user password 
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;

  if(userEmail == 'web@gmail.com' && userPassword == 'webboss'){
    window.location.href = 'banking.html';
  }
  else{
    alert('Please input valid info')
  }

})

// done banking part to another file 