const form = document.querySelector('.form');
const errorMsg = document.querySelector('.form__error');

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = form['email'];
  const { value } = emailInput;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (value.trim() === '') {
    const emailControl = emailInput.parentElement;
    emailControl.classList.add('form__control--error');
    return;
  } else if (!re.test(String(value).toLowerCase())) {
    const emailControl = emailInput.parentElement;
    emailControl.classList.add('form__control--error');
    return;
  } else {
    alert('Notified!');
  }
});
