const chatMessages = document.querySelector('.chat-messages');
const inputField = document.querySelector('input');
const sendBtn = document.querySelector('#sendBtn');

const chatbot = {
    "hello": "Hello! How can I help you today?",
    "hi": "Hi! How can I help you today?",
    "how can i register in this training?": "Please go to the registration page or call +216 54 654 ...",
    "how are you": "I'm doing well, thank you for asking. How are you? How can I help you today?",
    "goodbye": "Goodbye! It was nice chatting with you.",
    "can you help me ?": "Yes ",
    "will i get a certificate?": "Yes, at the end of the course, you will receive a certificate.",
    "default": "Please call the admin 54 654 ..."
};

// Function to handle user input
function handleUserInput() {
    const userInput = inputField.value.trim().toLowerCase();
    showUserMessage(userInput);

    let response = chatbot[userInput] || chatbot.default;
    showChatbotMessage(response);

    inputField.value = '';
}

// Event listener for "Send" button click
sendBtn.addEventListener('click', handleUserInput);

// Event listener for "Enter" key press
inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

// Function to display user message
function showUserMessage(message) {
    const userMessage = document.createElement('li');
    userMessage.textContent = message;
    userMessage.classList.add('user-message');
    chatMessages.appendChild(userMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to display chatbot message
function showChatbotMessage(message) {
    const chatbotMessage = document.createElement('li');
    chatbotMessage.textContent = message;
    chatbotMessage.classList.add('chatbot-message');
    chatMessages.appendChild(chatbotMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
