const formRef = document.querySelector(".feedback-form");
const throttle = require("lodash.throttle");

formRef.addEventListener("input", onTextareaInput);
formRef.addEventListener("submit", onFormSubmit);

fillInTextarea();

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
  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  localStorage.clear();
}

function fillInTextarea() {
  const saveData = localStorage.getItem("feedback-form-state");
  try {
    const dataArr = JSON.parse(saveData);
    if (dataArr.email) {
      formRef.elements.email.value = dataArr.email;
    }

    if (dataArr.message) {
      formRef.elements.message.value = dataArr.message;
    }
  } catch (error) {
    error.name;
    error.message;
  }
}
