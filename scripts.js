document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out! I will get back to you soon.');
        document.getElementById('contactForm').reset(); // Reset the form
    } else {
        alert('Please fill out all fields.');
    }
});
