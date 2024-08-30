
function handleSubmit(event){
    event.preventDefault();

    if(document.getElementById('name').value === ''){
        document.getElementById('name').value = 'Anonymous';
    }
    if(document.getElementById('email').value === ''){
        document.getElementById('email').value = 'Anonymous@anonymous.com';
    }
    event.target.submit();
}

window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};

function updateText(){
    const text = document.getElementById('form-location');
    if(window.innerWidth < 800){
        text.textContent = 'To submit feedback, please fill out the form below. You can provide your name and email address if you wish, but it is not required. We appreciate your time and feedback, and we will do our best to respond to your message promptly.';
    }else{
        text.textContent = 'To submit feedback, please fill out the form on the right. You can provide your name and email address if you wish, but it is not required. We appreciate your time and feedback, and we will do our best to respond to your message promptly.';
    }
}

updateText();

window.addEventListener('resize', updateText);
