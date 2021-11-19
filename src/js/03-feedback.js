const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
populateTextarea();
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');

  evt.currentTarget.reset();
  localStorage.removeItem('feedback-msg');
}

function onTextareaInput(evt) {
  const message = evt.currentTarget.value;
  localStorage.setItem('feedback-msg', message);
  //   console.log(localStorage.getItem('feedback-msg'));
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-msg');

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
