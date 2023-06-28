import { checkInput } from "./functions/checkInput.js";
import { form } from "./variables/form.js";

form.form.addEventListener("submit", e => {
    e.preventDefault();

    const listData = {
        "name": e.target.elements["name"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "birth": e.target.elements["birth"].value
        // "terms": e.target.elements["terms"].value
    }

    localStorage.setItem("register", JSON.stringify(listData));

    window.location.href = "./step2.html"
})

form.inputsForm.forEach(input => {

    input.addEventListener("blur", () => checkInput(input));
    input.addEventListener("invalid", event => event.preventDefault());
}) 