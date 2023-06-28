import { messages } from "../../variables/errors/messages.js";
import { showError } from "../../variables/errors/show.js";
import { typesError } from "../../variables/errors/types.js";
import isLegalAge from "./validAge.js";
import isCPF from "./validCPF.js";

export function checkInput(input) {

    let msg = "";
    
    if(input.name == "cpf" && input.value.length >= 11) {
        isCPF(input);
    }
    
    if(input.name == "birth" && input.value != "") {
        isLegalAge(input);
    }
    
    typesError.forEach(error => {
        if(input.validity[error]) {
            msg = messages[input.name][error];
            
            console.log(input.name);
            console.log(msg);
        }
    })
    
    showError(input, msg);

}

