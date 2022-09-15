const getEmail = document.querySelector('.email');
const getPassword = document.querySelector('.password');
const getButton = document.querySelector('button');
function validationUser() {
  const mailVerify = getEmail.value;
  const passVerify = getPassword.value;
  if (mailVerify === 'tryber@teste.com' && passVerify === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
getButton.addEventListener('click', validationUser);
