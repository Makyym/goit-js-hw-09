const formData = {
    email: "",
    message: "",
};

const formEl = document.querySelector(`.feedback-form`);
const emailEl = formEl.elements.email;
const messageEl = formEl.elements.message;
const storageFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
if (storageFormData) {
    emailEl.value = storageFormData.email;
    messageEl.value = storageFormData.message;
} else {
    emailEl.value = "";
    messageEl.value = "";
}

function formInputValues(event) {
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    } else {
        formData.message = event.target.value.trim();
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function formSubmit(evt) {
    evt.preventDefault();
    if (emailEl.value === "" || messageEl.value === "") {
        alert("Fill please all fields");
        return;
    };
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formEl.reset();
}

formEl.addEventListener("submit", formSubmit);
formEl.addEventListener("input", formInputValues);


