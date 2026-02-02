const contacts = document.querySelectorAll('.whadupContact');
const message = document.querySelector('.chatHenry');
const refreshButton = document.querySelector('.restartIcon');


// to show the chat
contacts.forEach(contact => {
    contact.addEventListener("click", chatAppearsFunc, true);
});

function chatAppearsFunc() {
    message.classList.remove('hidden');
}

// to reload the page
refreshButton.addEventListener("click", refreshPageFunc, true);

function refreshPageFunc() {
    window.location.reload();
}