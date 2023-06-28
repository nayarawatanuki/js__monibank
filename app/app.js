import { checkInput } from "./functions/step1/checkInput.js";
import { post } from "./functions/step1/post.js";
import { form } from "./variables/form.js";

form.form.addEventListener("submit", e => {
    e.preventDefault();

    post(e);

    window.location.href = "./step2.html"

    
})

form.inputsForm.forEach(input => {

    input.addEventListener("blur", () => checkInput(input));
    input.addEventListener("invalid", event => event.preventDefault());
}) 