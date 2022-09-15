let getEmail = document.querySelector('.email');
let getPassword = document.querySelector('.password');
let getButton = document.querySelector('button');
function validationUser() {
  let mailVerify = getEmail.value;
  let passVerify = getPassword.value;
  if (mailVerify === 'tryber@teste.com' && passVerify === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.')
  }
}
getButton.addEventListener('click', validationUser)