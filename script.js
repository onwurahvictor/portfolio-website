const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your message!');
    form.reset();
});
