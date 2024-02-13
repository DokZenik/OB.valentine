function updateMessage() {
    const message = document.getElementById('message');
    message.innerHTML = 'Спасибо, что стала моей валентинкой, сладость моя!';
    
    const image = document.getElementById('image');
    image.src = 'kittykiss-little-kitty.gif';
    const buttons = document.getElementById('buttons');
    buttons.style.display = 'none';
}

function moveButton() {
    const button = document.getElementById('noButton');
    button.style.position = 'relative';
    button.style.left = `calc(${(Math.random() * 50).toFixed(0)}vw - 10vw)`;
    button.style.top = `calc(${(Math.random() * 50).toFixed(0)}vh - 10vh)`;
    console.log("test moovement: " + button.style.left);
}

