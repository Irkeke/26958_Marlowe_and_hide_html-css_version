// CONTROLLER — handles the contact form's validation and mock submit.
// No model behind this one: the form doesn't read or persist any data,
// it only validates input and shows a confirmation message.

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return; // not on this page

  var successBox = document.getElementById('form-success');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (successBox) {
      successBox.classList.add('show');
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    form.reset();
  });
});
