// Variables to store the API Key and chat messages
let apiKey = localStorage.getItem('apiKey');

// Handle sending messages
document.getElementById('send-btn').addEventListener('click', sendMessage);

document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        // Display user message
        displayMessage(userInput, 'user');
        
        // Clear the input field
        document.getElementById('user-input').value = '';

        // Simulate AI response after a short delay
        setTimeout(() => {
            if (apiKey) {
                const aiResponse = generateAIResponse(userInput);
                displayMessage(aiResponse, 'ai');
            } else {
                displayMessage('Please enter and save your API Key first.', 'ai');
            }
        }, 1000);
    }
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    
    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(userMessage) {
    // Simple AI response logic
    if (userMessage.toLowerCase().includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('how are you')) {
        return 'I am just a bot, but I am doing well! How about you?';
    } else {
        return 'I am not sure how to respond to that. Can you try asking something else?';
    }
}
