const form = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    formMessage.textContent = 'Message sent successfully!';
    form.reset();
});