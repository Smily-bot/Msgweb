const messageContainer = document.getElementById('message-container'); 
const messageInput = document.getElementById('message-input'); 
function sendMessage() 
{ 
  const message = messageInput.value; 
  if (message !== '') 
  { 
    const newMessageElement = document.createElement('div'); 
    let result = text2.concat("you : ", message);
    result.concat("you : ", message);
    newMessageElement.innerText = result
    messageContainer.appendChild(newMessageElement); 
    messageInput.value = ''; 
  } 
}
