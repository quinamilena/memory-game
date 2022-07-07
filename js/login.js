const nickNameIpt = document.querySelector('#nickName');
const loginBtn = document.querySelector('#loginBtn');
const loginForm = document.querySelector('#loginForm');

const validNickNameIpt = ({ target }) => {
  const value = target.value;

  if (value.length > 3) {
    loginBtn.removeAttribute('disabled');

    return;
  }

  loginBtn.setAttribute('disabled', '');
};

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', nickNameIpt.value);
  window.location = 'pages/game.html';
};

nickNameIpt.addEventListener('input', validNickNameIpt);
loginForm.addEventListener('submit', handleSubmit);
