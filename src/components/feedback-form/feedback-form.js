const onSubmitHandler = (event) => {
  if (!event.currentTarget.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
  event.currentTarget.classList.add('was-validated')
}

const onPrivatePoliceCheckboxChangeHandler = (event) => {
  const form = event.currentTarget.closest('.feedback-form')
  const submit = form.querySelector('.feedback-form__submit')
  submit.disabled = !event.currentTarget.checked
}

export const feedbackForm = (form) => {
  if (form) {
    form.addEventListener('submit', onSubmitHandler, false)
    const checkbox = form.querySelector('.feedback-form__private-policy-check')
    if (checkbox) {
      checkbox.addEventListener('change', onPrivatePoliceCheckboxChangeHandler)
    }
  }
}
