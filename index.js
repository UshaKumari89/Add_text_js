let messageInput =  document.querySelector('#message-input')


messageInput.addEventListener('keydown', (e)=>{
if(e.key === "Enter"){
    getMessage()
}

})

function getMessage(){
let messageOutput = document.querySelector('#message-output')
.innerHTML = messageInput.value;
messageInput.value = '';


}