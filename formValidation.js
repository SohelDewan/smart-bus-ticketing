const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const emailInput = document.getElementById('email');
const nextButton = document.getElementById('next-btn');

// Function to check if all required fields are filled
function checkFormCompletion() {
  const isNameFilled = nameInput.value.trim() !== '';
  const isNumberFilled = numberInput.value.trim() !== '';
  const isEmailFilled = emailInput.value.trim() !== '';
  return isNameFilled && isNumberFilled && isEmailFilled;
}

// Enable the "Next" button when the form is completed
function enableNextButton() {
  if (checkFormCompletion()) {
    nextButton.removeAttribute('disabled');
  } else {
    nextButton.setAttribute('disabled', 'true');
  }
}

// Listen for input changes
nameInput.addEventListener('input', enableNextButton);
numberInput.addEventListener('input', enableNextButton);
emailInput.addEventListener('input', enableNextButton);