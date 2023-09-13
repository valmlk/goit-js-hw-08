import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[type="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('[type="submit"]');
const LOCALDATA = 'feedback-form-state';

form.addEventListener("input", throttle(setCurrentInfo, 500));
const savedState = JSON.parse(localStorage.getItem(LOCALDATA));

if (savedState) {
    emailInput.value = savedState.email;
    messageInput.value = savedState.message;
};

function setCurrentInfo() {
    const currentState = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };

localStorage.setItem(LOCALDATA, JSON.stringify(currentState));
};


function submitForm(event) {
    event.preventDefault();
  
    if (emailInput.value === "" || messageInput.value === "") {
      alert("Please fill in all fields!");
      return
    }
  
    const currentStateToShow = {
      email: emailInput.value,
      message: messageInput.value,
    };
  
    console.log(currentStateToShow);
    localStorage.removeItem(LOCALDATA);
    form.reset();
  }
  
  submitButton.addEventListener("click", submitForm);