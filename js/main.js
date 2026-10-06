const form = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');
const menuItems = document.querySelectorAll('.menu-item');
const addButtons = document.querySelectorAll('.add-btn');
const menuMessage = document.querySelector('.menu-message');
const orderMessage = document.querySelector('.order-message');
const cartCountElement = document.querySelector('.cart-count');


menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        const isActive = item.classList.toggle('active');

        const itemName = item.querySelector('h3').textContent;
        if (isActive) {
            menuItems.forEach(function (menuItem) {
                if (menuItem !== item) {
                    menuItem.classList.remove('active');
                };
            });
            menuMessage.textContent = `${itemName} selected!`
            menuMessage.classList.remove('hidden');
        } else {
            menuMessage.classList.add('hidden');

            setTimeout(function () {
                menuMessage.textContent = '';
            }, 300);
        };
    });
});

let cartCount = 0;

addButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const menuItem = button.closest('.menu-item');

        const itemName = menuItem.querySelector('h3').textContent;

        cartCount++;
        const itemLabel = cartCount === 1 ? 'item' : 'items';
        cartCountElement.textContent = `Cart: ${cartCount} ${itemLabel}`;

        orderMessage.textContent = `${itemName} added to your order!`;
        setTimeout(function () {
            orderMessage.textContent = '';
        }, 3000);
    });
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    formMessage.textContent = 'Message sent successfully!';
    form.reset();

    setTimeout(() => {
        formMessage.textContent = "";
    }, 3000);
});