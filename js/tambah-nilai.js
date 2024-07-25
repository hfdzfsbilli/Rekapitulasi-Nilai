document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'index.html';
    }

    document.getElementById('form-nilai').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const nim = document.getElementById('nim').value;
        const matakuliah = document.getElementById('matakuliah').value;
        const nilai = document.getElementById('nilai').value;

        let nilaiMahasiswa = JSON.parse(localStorage.getItem('nilaiMahasiswa')) || [];
        nilaiMahasiswa.push({ nama, nim, matakuliah, nilai });
        localStorage.setItem('nilaiMahasiswa', JSON.stringify(nilaiMahasiswa));

        alert('Nilai berhasil ditambahkan!');
        this.reset();
    });
});