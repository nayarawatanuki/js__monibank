export default function isLegalAge(input) {
    
    const birth = new Date(input.value);
    validAge(birth);

    if(!validAge(birth)) {
        input.setCustomValidity("O usuário, não é maior de idade.");
    }
}


function validAge(date) {

    const currentDate = new Date();
    const dateMore18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return currentDate >= dateMore18;
}