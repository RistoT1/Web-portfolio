
function copyEmail() {
    const email = "ristotoiv.RT@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        // Show the "Copied!" message
        const messageElement = document.getElementById("copiedMessage");
        messageElement.style.display = "inline"; // Show the message
        setTimeout(() => {
            messageElement.style.display = "none"; // Hide the message after 2 seconds
        }, 1000);
    }).catch(err => {
        console.error('Error copying email: ', err);
    });
}