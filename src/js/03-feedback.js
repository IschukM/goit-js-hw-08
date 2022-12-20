import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

refs.form.addEventListener('input', throttle(formText, 500));

function formText() {
  formData[refs.input.name] = refs.input.value;
  formData[refs.textarea.name] = refs.textarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(`email: ${refs.input.value},
message: ${refs.textarea.value}`);
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
});

onTextContent();
function onTextContent() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage === null) {
    return;
  }
  refs.textarea.value = savedMessage['message'] || '';
  refs.input.value = savedMessage['email'] || '';
}
