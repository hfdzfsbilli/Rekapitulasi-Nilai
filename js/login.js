document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Ini hanya simulasi login sederhana. Dalam aplikasi nyata, Anda harus menggunakan autentikasi yang aman.
    if (username === 'billi' && password === 'amikom12345') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Username atau password salah!');
    }
});