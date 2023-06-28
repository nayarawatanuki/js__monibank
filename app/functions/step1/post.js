export function post(e) {
    const listData = {
        "name": e.target.elements["name"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "birth": e.target.elements["birth"].value
        // "terms": e.target.elements["terms"].value
    };

    localStorage.setItem("register", JSON.stringify(listData));
}