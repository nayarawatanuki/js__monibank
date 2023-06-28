export function showError(input, msg) {
    const messageError = input.parentNode.querySelector(".message-error");
    const validatorInput = input.checkValidity();

    input.setCustomValidity("");

    if (!validatorInput) {
        messageError.textContent = msg;
    } else {
        messageError.textContent = "";
    }
}