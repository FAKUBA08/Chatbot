// Chatbot script

// Define the chatbot's responses
const responses = {
    "hello": "Hello! How can I assist you today?",
    "created by who":"Fakuba",
    "hi": "Hi! What's on your mind?",
    "how are you": "I'm doing great, thanks! How about you?",
    "what's your name": "Do you mean the Boss??I'm created by Fakuba",
    "default": "I didn't understand that. Can you please rephrase?"
  };
  
  function chatbot(input) {
    input = input.toLowerCase();
    for (const key in responses) {
      if (input.includes(key)) {
        return responses[key];
      }
    }
  
    return responses["default"];
  }
  
  const chatInterface = document.getElementById("chat-interface");
  
  const synth = window.speechSynthesis;
  
  document.getElementById("chat-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      const userInput = document.getElementById("chat-input").value;
  
      document.getElementById("chat-input").value = "";
  
      const userMessage = document.createElement("div");
      userMessage.className = "user-message";
      userMessage.textContent = userInput;
      chatInterface.appendChild(userMessage);
  
      const userSpeech = new SpeechSynthesisUtterance(userInput);
      synth.speak(userSpeech);
  
      const response = chatbot(userInput);
  
      const botMessage = document.createElement("div");
      botMessage.className = "bot-message";
      botMessage.textContent = response;
      chatInterface.appendChild(botMessage);
  
      const botSpeech = new SpeechSynthesisUtterance(response);
      synth.speak(botSpeech);
    }
  });