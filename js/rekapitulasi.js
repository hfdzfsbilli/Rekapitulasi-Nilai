document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'index.html';
    }

    tampilkanRekapitulasi();
});

function tampilkanRekapitulasi() {
    const nilaiMahasiswa = JSON.parse(localStorage.getItem('nilaiMahasiswa')) || [];
    const tbody = document.querySelector('#tabel-rekapitulasi tbody');
    tbody.innerHTML = '';

    nilaiMahasiswa.forEach(siswa => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = siswa.nama;
        row.insertCell(1).textContent = siswa.nim;
        row.insertCell(2).textContent = siswa.matakuliah;
        row.insertCell(3).textContent = siswa.nilai;
        row.insertCell(4).textContent = hitungGrade(siswa.nilai);
    });

    hitungStatistik(nilaiMahasiswa);
}

function hitungGrade(nilai) {
    if (nilai >= 80) return 'A';
    if (nilai >= 70) return 'B';
    if (nilai >= 60) return 'C';
    if (nilai >= 50) return 'D';
    return 'E';
}

function hitungStatistik(nilaiMahasiswa) {
    const nilai = nilaiMahasiswa.map(siswa => parseFloat(siswa.nilai));
    const rataRata = nilai.reduce((a, b) => a + b, 0) / nilai.length;
    const nilaiTertinggi = Math.max(...nilai);
    const nilaiTerendah = Math.min(...nilai);

    document.getElementById('rata-rata').textContent = rataRata.toFixed(2);
    document.getElementById('nilai-tertinggi').textContent = nilaiTertinggi;
    document.getElementById('nilai-terendah').textContent = nilaiTerendah;
}