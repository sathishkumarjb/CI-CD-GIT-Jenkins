function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        document.getElementById('resultName').innerText = name;
        document.getElementById('resultEmail').innerText = email;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
}

