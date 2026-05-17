// ============================================================
//  app.js  –  Server utama Express.js
//  Jalankan dengan: node app.js
// ============================================================

const express = require('express');
const path    = require('path');

const app  = express();
const PORT = 3000;

// ── Middleware ────────────────────────────────────────────
// Melayani file statis dari folder "public" (CSS, JS, gambar)
app.use(express.static(path.join(__dirname, 'public')));

// ── Routes ───────────────────────────────────────────────

// GET /  →  Kirim halaman utama portfolio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// GET /api/profil  →  Data profil dalam format JSON
app.get('/api/profil', (req, res) => {
  res.json({
    nama         : 'Rizky Fahreza',
    pekerjaan    : 'Full-Stack Developer',
    tanggalLahir : '1997-08-15',
    email        : 'rizky@email.com',
    lokasi       : 'Bandung, Indonesia',
  });
});

// GET /api/film  →  Daftar film favorit dalam JSON
app.get('/api/film', (req, res) => {
  res.json([
    {
      judul    : 'Interstellar',
      tahun    : 2014,
      genre    : 'Sci-Fi / Drama',
      rating   : 9.0,
      deskripsi: 'Perjalanan menembus dimensi waktu dan ruang demi menyelamatkan umat manusia dari kepunahan.',
      emoji    : '🚀',
    },
    {
      judul    : 'The Dark Knight',
      tahun    : 2008,
      genre    : 'Action / Crime',
      rating   : 9.0,
      deskripsi: 'Batman berhadapan dengan Joker, seorang kriminal jenius yang membawa Gotham ke titik kehancuran.',
      emoji    : '🦇',
    },
    {
      judul    : 'Inception',
      tahun    : 2010,
      genre    : 'Sci-Fi / Thriller',
      rating   : 8.8,
      deskripsi: 'Seorang pencuri yang memasuki mimpi orang lain untuk mencuri rahasia terdalam dari alam bawah sadar.',
      emoji    : '🌀',
    },
  ]);
});

// ── Jalankan Server ───────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════╗');
  console.log('  ║   🚀  Server berjalan!                ║');
  console.log(`  ║   🌐  http://localhost:${PORT}           ║`);
  console.log('  ║   🛑  Ctrl+C untuk stop               ║');
  console.log('  ╚══════════════════════════════════════╝');
  console.log('');
});
