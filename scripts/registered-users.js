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
