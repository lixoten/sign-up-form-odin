const submitBtn = document.getElementById("submit");
const pw1Element = document.getElementById("password");
const pw2Element = document.getElementById("confirm-password");
const pwMessage = document.getElementById("pw-msg");
const formElement = document.querySelector("form");
submitBtn.addEventListener('click', (event) => {
    let a = pw1Element.value;
    let b = pw2Element.value;
    if (a !== b || !formElement.checkValidity()) {  // had to research this
        event.preventDefault();
        pwMessage.textContent = a !== b ? "Passwords do not match" : "";
        formElement.reportValidity(); // had to research this
    } else {
        alert(`Form submitted. Have a nice day:)` )
        pwMessage.textContent = "";
    }
})