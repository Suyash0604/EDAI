document.addEventListener("DOMContentLoaded", () => {
    // Simulate getting the email from the previous login page
    const email = "john.doe22@vit.edu";

    // Extract first and last names
    const firstName = email.split('.')[0];
    const lastName = email.split('.')[1].split('22')[0];

    // Display user name
    document.getElementById('user-name').textContent = `${firstName} ${lastName}`;
});

// Optionally, you can add other dynamic behavior here.
    