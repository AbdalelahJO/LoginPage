function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedPassword = localStorage.getItem(username);
  
    if (storedPassword && storedPassword === password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('account-switch').style.display = 'none';
        document.getElementById('username').textContent = username;
        document.getElementById('welcome').style.display = 'block';
    } else {
        alert('Invalid username or password.');
    }
}

function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
  
    if (username && password) {
        localStorage.setItem(username, password);
        alert('your account has been created!');
        toggleForms();
    } else {
        alert('Username and password are required.');
    }
}

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const accountSwitch = document.getElementById('account-switch');
  
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        accountSwitch.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        accountSwitch.style.display = 'none';
    }
}

