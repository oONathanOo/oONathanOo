
const correctPassword = "apple";

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function() {
    const passwordInput = document.getElementById("password").value;

    if (passwordInput === correctPassword) {
   
        window.location.href = "new_page.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
});
