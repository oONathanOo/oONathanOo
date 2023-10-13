 const correctPassword = "motdepasse";

        const loginButton = document.getElementById("loginButton");

        loginButton.addEventListener("click", function() {
            const passwordInput = document.getElementById("password").value;

            if (passwordInput === correctPassword) {
                // Redirect to a new page when the correct password is entered
                window.location.href = "new_page.html";
            } else {
                alert("Incorrect password. Please try again.");
            }
        });
