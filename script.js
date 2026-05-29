const contacts = document.querySelectorAll('.whadupContact');
const message = document.querySelector('.chatMessages');
const refreshButton = document.querySelector('.restartIcon');
const textarea = document.querySelector('.chatBubble');

// to show the chat
contacts.forEach(contact => {
    contact.addEventListener("click", function() {
        chatAppearsFunc(contact);
    }, true);
});

// to reload the page
refreshButton.addEventListener("click", refreshPageFunc, true);

function chatAppearsFunc(contact) {
    document.querySelector('.chatContactName h3').textContent = contact.dataset.name;
    document.querySelector('.chatPartOneContact img').src = contact.dataset.image;
    const clickedContact = contact.dataset.contact;
    
    const allChats = document.querySelectorAll('.chatMessages');
    allChats.forEach(chat => {
        chat.classList.add('hidden');
    });

    document.querySelector(`[data-chat="${clickedContact}"]`).classList.remove('hidden');
    document.querySelector('.chatContactName h3').textContent = contact.dataset.name;
    document.querySelector('.chatPartOneContact img').setAttribute('src', contact.dataset.image);
}

function refreshPageFunc() {
    window.location.reload();
}

// // to make the textarea grow with the text
textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
});

document.querySelector('[data-chat="welcome"]').classList.remove('hidden');
document.querySelector('.chatContactName h3').textContent = 'Welcome';
document.querySelector('.chatPartOneContact img').setAttribute('src', 'Images/bluey.png');


contacts.forEach(contact => {
    const contactName = contact.dataset.contact;
    const matchingChat = document.querySelector(`[data-chat="${contactName}"]`);
    
    if (matchingChat) {
        const lastMessage = matchingChat.lastElementChild;
        const lastMessageText = lastMessage.querySelector('p');
        const lastMessageImage = lastMessage.querySelector('img');
        const lastMessageAudio = lastMessage.querySelector('iframe');
        
        if (lastMessageImage) {
            contact.querySelector('.lastMessage p').textContent = 'Photo';
        } else if (lastMessageAudio) {
            contact.querySelector('.lastMessage p').textContent = 'Audio';
        } else if (lastMessageText) {
            contact.querySelector('.lastMessage p').textContent = lastMessageText.textContent;
        }
    }
});