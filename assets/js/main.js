// const validateForm = formSelector => {
//   const formElement = document.querySelector(formSelector);

//   const validationOptions = [
//     {
//       attribute: 'required',
//       isValid: input => input.value.trim() !== '',
//       errorMessage: (input, label) => `${label.textContent} is required`
//     }
//   ]

//   const validateSingleFormGroup = formGroup => {
//     const label = formGroup.querySelector('label');
//     const input = formGroup.querySelector('input');
//     const errorText = formGroup.querySelector('.error-text')
//   }

//   for(const option of validationOptions) {
//     if(input.hasAttribute(option.attribute) && !option.isValid(input)) {
//       errorText.textContent = option.errorMessage(input, label)
//     }
//   }

//   formElement.setAttribute('novalidate', '');

//   formElement.addEventListener('submit', event => {
//     event.preventDefault();

//     validateAllFormGroups(formElement);
//   })

//   const validateAllFormGroups = formToValidate => {
//     const formGroups = Array.from(formToValidate.querySelectorAll('.form-group'));

//     formGroups.forEach(formGroup => {
//       validateSingleFormGroup(formGroup);
//     })
//   }
// }

// validateForm('#registration-form')

const selectQuery = (query) => document.querySelector(query)

let form = selectQuery('#registration-form')
let emailInput = selectQuery('#email')
let errorMsg = selectQuery('.error-text')
let sunscribedMail = selectQuery('.subscribed-mail')
let dismissBtn = selectQuery('.dismiss-btn')

const signupPage = selectQuery('.signup-page');
const thanksPage = selectQuery('.thanks-page');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function formSuccess() {
  signupPage.style.display = 'none';
  thanksPage.style.display = 'flex'
}


  


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let email = emailInput.value.trim()

  if (emailRegex.test(email)) {
    formSuccess();
    sunscribedMail.textContent = email;
    emailInput.value = '';
    errorMsg.textContent = '';
    emailInput.classList.remove('error-input-field')
  }
  else {
    errorMsg.textContent = 'Valid email required';
    emailInput.classList.add('error-input-field')
  }
})

dismissBtn.addEventListener('click', () => {
  signupPage.style.display = 'flex';
  thanksPage.style.display = 'none';
})

