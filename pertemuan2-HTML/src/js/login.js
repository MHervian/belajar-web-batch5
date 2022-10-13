
// function validasi
function validasi(ev) {
    var inputField = document.getElementsByClassName("input-field-login");

    // console.log(inputField[0].value);
    document.getElementById("wrong-username").style.display = "none";
    document.getElementById("wrong-password").style.display = "none";

    if (inputField[0].value != "admin") {
        document.getElementById("wrong-username").style.display = "block";
        ev.preventDefault();
    }

    if (inputField[1].value != "test") {
        document.getElementById("wrong-password").style.display = "block";
        ev.preventDefault();
    }
}

// event click pada button login
document.getElementById("validate-login").addEventListener("click", validasi);