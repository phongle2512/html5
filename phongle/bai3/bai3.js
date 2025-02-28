function onSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the value of the email input
    const email = document.getElementById('emailInput').value;
    let message = "";

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      message = 'Email is valid!';
    } else {
      message = 'Please enter a valid email address.';
    }

    // Display the validation message
    document.getElementById('message').innerText = message;
}