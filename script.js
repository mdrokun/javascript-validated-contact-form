// Variables
const sendBtn = document.querySelector('#sendBtn'),
    fullNameField = document.querySelector('#full-name'),
    emailField = document.querySelector('#email'),
    messageField = document.querySelector('#message'),
    form = document.querySelector('#form')

// All Events
loadAllEvents()
function loadAllEvents() {
    document.addEventListener('DOMContentLoaded', initApp)
    fullNameField.addEventListener('blur', validateField)
    emailField.addEventListener('blur', validateField)
    messageField.addEventListener('blur', validateField)
    form.addEventListener('submit', sendMessage)
}

// Functions
function initApp() {
    sendBtn.disabled = true
}

function validateField() {
    let errors

    // Validate the length
    validateLength(this)

    // Validate the '@' sign
    if (this.type === 'email') {
        validateEmail(this)
    }

    errors = document.querySelectorAll('.error')
    if (fullNameField.value !== '' && emailField.value !== '' && messageField.value !== '') {
        if (errors.length === 0) {
            sendBtn.disabled = false
        }
    }
}

// Validate the length
function validateLength(field) {
    if (field.value.length > 0) {
        field.style.border = '1px solid green'
        field.classList.remove('error')
    } else {
        field.style.border = '2px dotted red'
        field.classList.addClass('error')
    }
}

// Validate the '@' sign
function validateEmail(field) {
    let emailText = field.value
    if (emailText.indexOf('@') !== -1) {
        field.style.border = '1px solid green'
        field.classList.remove('error')
    } else {
        field.style.border = '2px dotted red'
        field.classList.addClass('error')
    }
}

// Send Message
function sendMessage(e) {
    e.preventDefault()

    const sendingImg = document.querySelector('#sending')
    sendingImg.style.display = 'block'
    const sendImg = document.createElement('img')
    sendImg.src = 'img/send.gif'

    setTimeout(() => {
        sendingImg.style.display = 'none'
        form.reset()
        document.querySelector('#loaders').appendChild(sendImg)
        setTimeout(() => {
            sendImg.remove()
        }, 5000);
    }, 3000);
}