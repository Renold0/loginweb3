document.getElementById('register-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        if (localStorage.getItem(email)) {
            document.getElementById('message').textContent = 'Email sudah terdaftar.';
        } else {
            localStorage.setItem(email, password);
            document.getElementById('message').textContent = 'Akun berhasil dibuat. Silakan login.';
        }
    } else {
        document.getElementById('message').textContent = 'Email dan Password wajib diisi.';
    }
});

document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        const storedPassword = localStorage.getItem(email);
        if (storedPassword === password) {
            sessionStorage.setItem('user', email); // Simpan sesi login
            window.location.href = 'profile.html';
        } else {
            document.getElementById('message').textContent = 'Email atau Password salah.';
        }
    } else {
        document.getElementById('message').textContent = 'Email dan Password wajib diisi.';
    }
});
