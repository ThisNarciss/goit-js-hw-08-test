const formRef = document.querySelector(".feedback-form");
const throttle = require("lodash.throttle");

formRef.addEventListener("input", throttle(onTextareaInput, 500));
formRef.addEventListener("submit", onFormSubmit);

function onTextareaInput(event) {
  const feedbackArr = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };

  localStorage.setItem("feedback-form-state", JSON.stringify(feedbackArr));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.message.value === ""
  ) {
    alert("Для відправки форми мають бути заповнені всі поля!!!");
    return;
  }
  event.currentTarget.reset();
}

function fillInTextarea() {
  const Data = localStorage.getItem("feedback-form-state");
  if (Data) {
  }
}
