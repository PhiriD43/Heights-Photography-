document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");

    if (name.length < 3) {
        formMessage.innerHTML = "Name must be at least 3 characters long.";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        formMessage.innerHTML = "Please enter a valid email.";
        formMessage.style.color = "red";
        return;
    }

    if (message.length < 10) {
        formMessage.innerHTML = "Message must be at least 10 characters.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.innerHTML = "Booking request sent!";
    formMessage.style.color = "green";
});
