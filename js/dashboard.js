document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'index.html';
    }

    document.getElementById('logout').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('loggedIn');
        window.location.href = 'index.html';
    });

    tampilkanDataDashboard();
});

function tampilkanDataDashboard() {
    const nilaiMahasiswa = JSON.parse(localStorage.getItem('nilaiMahasiswa')) || [];
    
    // Menampilkan ringkasan
    document.getElementById('total-mahasiswa').textContent = nilaiMahasiswa.length;
    const rataRataNilai = hitungRataRataNilai(nilaiMahasiswa);
    document.getElementById('rata-rata-nilai').textContent = rataRataNilai.toFixed(2);
    const totalMataKuliah = hitungTotalMataKuliah(nilaiMahasiswa);
    document.getElementById('total-matakuliah').textContent = totalMataKuliah;

    // Menampilkan tabel data mahasiswa
    const tbody = document.querySelector('#tabel-mahasiswa tbody');
    tbody.innerHTML = '';

    nilaiMahasiswa.forEach(siswa => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = siswa.nama;
        row.insertCell(1).textContent = siswa.nim;
        row.insertCell(2).textContent = siswa.matakuliah;
        row.insertCell(3).textContent = siswa.nilai;
        row.insertCell(4).textContent = hitungGrade(siswa.nilai);
    });
}

function hitungRataRataNilai(nilaiMahasiswa) {
    if (nilaiMahasiswa.length === 0) return 0;
    const totalNilai = nilaiMahasiswa.reduce((sum, siswa) => sum + parseFloat(siswa.nilai), 0);
    return totalNilai / nilaiMahasiswa.length;
}

function hitungTotalMataKuliah(nilaiMahasiswa) {
    const mataKuliah = new Set(nilaiMahasiswa.map(siswa => siswa.matakuliah));
    return mataKuliah.size;
}

function hitungGrade(nilai) {
    nilai = parseFloat(nilai);
    if (nilai >= 80) return 'A';
    if (nilai >= 70) return 'B';
    if (nilai >= 60) return 'C';
    if (nilai >= 50) return 'D';
    return 'E';
}