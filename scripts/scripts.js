/*document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const registrationCountElement = document.getElementById("registrationCount");
    let registrationCount = 0;

    // Check if there are any registrations in local storage
    if (localStorage.getItem("registrations")) {
        const registrations = JSON.parse(localStorage.getItem("registrations"));
        registrationCount = registrations.length;
        updateRegistrationCount(registrationCount);
    }

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        
        // Add registration to local storage
        const registrations = localStorage.getItem("registrations") ? JSON.parse(localStorage.getItem("registrations")) : [];
        registrations.push({ name, email });
        localStorage.setItem("registrations", JSON.stringify(registrations));

        registrationCount++;
        updateRegistrationCount(registrationCount);
        alert(`Thank you, ${name}, for registering!`);

        // Reset the form
        registrationForm.reset();
    });

    function updateRegistrationCount(count) {
        registrationCountElement.textContent = count;
    }
}); */

document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const registrationCountElement = document.getElementById("registrationCount");
    const registeredUsersList = document.getElementById("registeredUsersList"); // Add this line
    let registrationCount = 0;

    // Check if there are any registrations in local storage
    if (localStorage.getItem("registrations")) {
        const registrations = JSON.parse(localStorage.getItem("registrations"));
        registrationCount = registrations.length;
        updateRegistrationCount(registrationCount);
        updateRegisteredUsersList(registrations); // Display registered users
    }

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        
        // Add registration to local storage
        const registrations = localStorage.getItem("registrations") ? JSON.parse(localStorage.getItem("registrations")) : [];
        registrations.push({ name, email });
        localStorage.setItem("registrations", JSON.stringify(registrations));

        registrationCount++;
        updateRegistrationCount(registrationCount);
        updateRegisteredUsersList(registrations); // Display registered users

        alert(`Thank you, ${name}, for registering!`);

        // Reset the form
        registrationForm.reset();
    });

    function updateRegistrationCount(count) {
        registrationCountElement.textContent = count;
    }

    function updateRegisteredUsersList(users) {
        registeredUsersList.innerHTML = ""; // Clear the list
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = `${user.name} - ${user.email}`;
            registeredUsersList.appendChild(listItem);
        });
    }
});

