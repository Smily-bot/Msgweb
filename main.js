const messageContainer = document.getElementById('message-container'); 
const messageInput = document.getElementById('message-input'); 
function sendMessage() 
{ 
  const message = messageInput.value; 
  if (message !== '') 
  { 
    const newMessageElement = document.createElement('div');
    newMessageElement.innerText = "you : " + message;
    messageContainer.appendChild(newMessageElement); 
    messageInput.value = ''; 
  } 
}
