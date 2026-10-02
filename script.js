// ---------- Project filter ----------
// Called by the onclick="filterProjects('...')" buttons in projects.html
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-buttons button');

    cards.forEach(function (card) {
        const show = category === 'all' || card.dataset.category === category;
        card.style.display = show ? '' : 'none';
    });

    // Highlight the active filter button (needs a .filter-buttons button.active style)
    buttons.forEach(function (btn) {
        const matches = btn.getAttribute('onclick').includes("'" + category + "'");
        btn.classList.toggle('active', matches);
    });
}

// ---------- Contact form validation ----------
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function showError(input, errorEl, message) {
        errorEl.textContent = message;
        input.classList.toggle('invalid', message !== '');
    }

    function validateName() {
        const ok = nameInput.value.trim() !== '';
        showError(nameInput, nameError, ok ? '' : 'Please enter your name.');
        return ok;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        let message = '';
        if (value === '') {
            message = 'Please enter your email.';
        } else if (!emailPattern.test(value)) {
            message = 'Enter a valid email, like name@example.com.';
        }
        showError(emailInput, emailError, message);
        return message === '';
    }

    function validateMessage() {
        const value = messageInput.value.trim();
        let message = '';
        if (value === '') {
            message = 'Please enter a message.';
        } else if (value.length < 10) {
            message = 'Your message should be at least 10 characters.';
        }
        showError(messageInput, messageError, message);
        return message === '';
    }

    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        formSuccess.textContent = '';

        // Run all three so every error shows at once
        const results = [validateName(), validateEmail(), validateMessage()];

        if (results.every(Boolean)) {
            formSuccess.textContent = 'Thank you, ' + nameInput.value.trim() + '! Your message has been sent.';
            contactForm.reset();
        }
    });
}