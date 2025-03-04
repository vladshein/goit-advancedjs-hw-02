const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
};

const formData = {
  email: '',
  message: '',
};

const fillFormFields = feedbackForm => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (formDataFromLS === null) {
      return;
    }

    if (formDataFromLS.email) formData.email = formDataFromLS.email;
    if (formDataFromLS.message) formData.message = formDataFromLS.message;

    const formDataKeys = Object.keys(formDataFromLS);

    formDataKeys.forEach(key => {
      feedbackForm.elements[key].value = formDataFromLS[key];
    });
  } catch (err) {
    console.log(err);
  }
};

fillFormFields(refs.feedbackForm);

const onFieldChange = ({ target: formField }) => {
  const formFieldName = formField.name;
  const formFieldValue = formField.value;

  formData[formFieldName] = formFieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  //   const email = document.querySelector('input').value;
  //   const message = document.querySelector('textarea').value;

  if (!formData.email || !formData.message) {
    // event.preventDefault(); // Prevent form submission
    alert('Будь ласка, заповніть усі поля');
    return;
  }
  console.log(formData.email);
  console.log(formData.message);

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
};

refs.feedbackForm.addEventListener('input', onFieldChange);
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
