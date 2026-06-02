const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

form.addEventListener('input', event => {
  const key = event.target.name;
  const value = event.target.value;

  formData[key] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parse = JSON.parse(savedData);

  formData.email = parse.email;
  formData.message = parse.message;

  email.value = parse.email;
  message.value = parse.message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  } else {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');

    form.reset();

    formData.email = '';
    formData.message = '';
  }
});
