 // Выполняем для каждого инпута проверку на валидность 
 const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 
// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, validationList) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationList.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationList.errorClass);
  };
// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, validationList) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationList.inputErrorClass);
    errorElement.classList.remove(validationList.errorClass);
    errorElement.textContent = " ";
  }; 
// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, validationList) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationList);
    } else {
      hideInputError(formElement, inputElement, validationList);
    }
  }
// Функция, которая включает и отключает кнопку
const toggleButton = (inputList, buttonElement, validationList) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationList.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(validationList.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};
  const setEventListeners = (formElement, validationList) => {
    const inputList = Array.from(formElement.querySelectorAll(validationList.inputSelector));
    const buttonElement = formElement.querySelector(validationList.submitButtonSelector);
    toggleButton(inputList, buttonElement, validationList);
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement, validationList);
        toggleButton(inputList, buttonElement, validationList);
      });
    });
  };
  
  function removeError(formElement, validationList) {
    const buttonElement = formElement.querySelector(validationList.submitButtonSelector);
    const inputList = Array.from(formElement.querySelectorAll(validationList.inputSelector));
    toggleButton(inputList, buttonElement, validationList);
    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, validationList);
    });
  };

  const enableValidation = (validationList) => {
    const formList = Array.from(document.querySelectorAll(validationList.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
          setEventListeners(formElement, validationList);
      });
      };

const validationList = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
  };

  enableValidation(validationList); 