document.addEventListener("DOMContentLoaded", function() {
    const registrationCountElement = document.getElementById("registrationCount");
    const registeredUsersList = document.getElementById("registeredUsersList");

    // Check if there are any registrations in local storage
    if (localStorage.getItem("registrations")) {
        const registrations = JSON.parse(localStorage.getItem("registrations"));
        registrationCountElement.textContent = registrations.length;
        registrations.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = `${user.name} - ${user.email}`;
            registeredUsersList.appendChild(listItem);
        });
    } else {
        registrationCountElement.textContent = 0;
    }
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials (replace with your authentication logic)
    if (username === "admin01" && password === "singleadults@1") {
        window.location.href = "registered-users.html"; // Redirect to registration page
    } else {
        alert("Invalid credentials. Please contact the admin.");
    }
});