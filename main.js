const messageContainer = document.getElementById('message-container'); 
const messageInput = document.getElementById('message-input'); 
function sendMessage() 
{ 
  const message = messageInput.value; 
  if (message !== '') 
  { 
    const newMessageElement = document.createElement('div'); 
    const text2 = '';
    newMessageElement.innerText = let result = text2.concat("you : ", message); 
    messageContainer.appendChild(newMessageElement); 
    messageInput.value = ''; 
  } 
}
