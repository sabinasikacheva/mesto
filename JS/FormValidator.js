import { validationList } from "./Data.js";

export default class FormValidator {
  constructor(validationList, formElement) {
    this._formElement = formElement;
    this._validationList = validationList;
  }
// Функция, которая добавляет класс с ошибкой
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._validationList.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationList.errorClass);
  }
// Функция, которая удаляет класс с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._validationList.inputErrorClass);
    errorElement.classList.remove(this._validationList.errorClass);
    errorElement.textContent = " ";
  }
// Функция, которая включает и отключает кнопку
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._validationList.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.classList.remove(this._validationList.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }
// Выполняем для каждого инпута проверку на валидность 
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
// Функция, которая проверяет валидность поля
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(validationList.inputSelector));
    this._buttonElement = this._formElement.querySelector(validationList.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}
