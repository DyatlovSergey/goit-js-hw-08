import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.email.addEventListener('input', throttle(onMailInput, 500));
populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onMailInput(evt) {
  formData.email = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onTextareaInput(evt) {
  formData.message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    console.log(savedMessage);

    formData.email = savedMessage.email;
    formData.message = savedMessage.message;
    refs.email.value = formData.email;
    refs.textarea.value = formData.message;
  }
}
