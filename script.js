const form = document.getElementById('contact-us');
const emailErrorMessage = document.getElementById('error-messages');
const fnameErrorMessage = document.getElementById('fname-error-message');
const lnameErrorMessage = document.getElementById('lname-error-message');
const messageErrorMessage = document.getElementById('message-error-message');
const checkboxErrorMessage = document.getElementById('checkbox-error');
const queryErrorMessage = document.getElementById('query-error-message');
const emailBorder = document.getElementById('email')
const fnameBorder = document.getElementById('fname')
const lnameBorder = document.getElementById('lname')
const messageBorder = document.getElementById('message')

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    emailErrorMessage.innerHTML = "";
    fnameErrorMessage.innerHTML = "";
    lnameErrorMessage.innerHTML = "";
    messageErrorMessage.innerHTML= "";
    checkboxErrorMessage.innerHTML = "";
    queryErrorMessage.innerHTML = "";
    emailBorder.style.border = "0.7px solid #ccc";
    fnameBorder.style.border = "1px solid #ccc";
    lnameBorder.style.border = "1px solid #ccc";
    messageBorder.style.border = "1px solid #ccc";
    const email = document.getElementById('email').value;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const message = document.getElementById('message').value;
    const checkbox = document.getElementById('consent');
    const queryButtons = document.querySelectorAll('input[name="query"]');
    let queryChecked = false;
    for (const radioButton of queryButtons) {
      if (radioButton.checked) {
        queryChecked = true;
        console.log(radioButton);
        break;
    }};

    let isValid = true;

    if (!emailIsValid(email)) {
        emailErrorMessage.innerHTML = "Invalid email address";
        emailBorder.style.border = "0.7px solid hsl(0, 66%, 54%)";
        isValid = false;
    }
    if (fname.length < 1) {
        fnameErrorMessage.innerHTML = "This field is required";
        fnameBorder.style.border = "1px solid hsl(0, 66%, 54%)";
        isValid = false;
    }
    if (lname.length < 1) {
        lnameErrorMessage.innerHTML = "This field is required";
        lnameBorder.style.border = "1px solid hsl(0, 66%, 54%)";
        isValid = false;
    }
    if (message.length < 100) {
        messageErrorMessage.innerHTML = "This field is required";
        messageBorder.style.border = "1px solid #hsl(0, 66%, 54%)";
        isValid = false;
    }
    if (!checkbox.checked) {
        checkboxErrorMessage.innerHTML = "To submit this form, please consent to being contacted";
        isValid = false;
    }
;
    if (!queryChecked) {
        queryErrorMessage.style.color = "red";
        queryErrorMessage.innerHTML = "Please select a query type";
        isValid = false;
    }

    if (isValid) {
    alert("The message was sent successfully");
    form.submit();
}
});

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
