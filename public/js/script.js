

/* ── DATA VARIABEL ────────────────────────────────────────── */
const nama         = 'Fawaz Ridho Firdaus';
const pekerjaan    = 'Wirausaha';
const tanggalLahir = new Date('2004-06-23');

const filmFavorit = [
  {
    judul    : 'Interstellar',
    tahun    : 2014,
    genre    : 'Sci-Fi / Drama',
    rating   : 9.0,
    deskripsi: 'Perjalanan menembus dimensi waktu dan ruang demi menyelamatkan umat manusia dari kepunahan.',
    emoji    : '🚀',
    poster   : 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIe.jpg',
    warna    : '#1a237e',
  },
  {
    judul    : 'The Dark Knight',
    tahun    : 2008,
    genre    : 'Action / Crime',
    rating   : 9.0,
    deskripsi: 'Batman berhadapan dengan Joker, seorang kriminal jenius yang membawa Gotham ke titik kehancuran.',
    emoji    : '🦇',
    poster   : 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    warna    : '#0d1b2a',
  },
  {
    judul    : 'Inception',
    tahun    : 2010,
    genre    : 'Sci-Fi / Thriller',
    rating   : 8.8,
    deskripsi: 'Seorang pencuri yang memasuki mimpi orang lain untuk mencuri rahasia terdalam dari alam bawah sadar.',
    emoji    : '🌀',
    poster   : 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
    warna    : '#0a2342',
  },
];

/* ── FORMAT TANGGAL ───────────────────────────────────────── */
function formatTanggal(date) {
  return date.toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
}

/* ── HITUNG USIA ──────────────────────────────────────────── */
function hitungUsia(date) {
  const today = new Date();
  let usia = today.getFullYear() - date.getFullYear();
  const m  = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) usia--;
  return usia;
}

/* ── GET ZODIAK ───────────────────────────────────────────── */
function getZodiak(date) {
  const b = date.getMonth() + 1;
  const h = date.getDate();
  const list = [
    { nama:'Capricorn',   simbol:'♑', tanggal:'22 Des – 19 Jan', sifat:'Ambisius, disiplin, dan sabar.' },
    { nama:'Aquarius',    simbol:'♒', tanggal:'20 Jan – 18 Feb', sifat:'Inovatif, mandiri, dan idealis.' },
    { nama:'Pisces',      simbol:'♓', tanggal:'19 Feb – 20 Mar', sifat:'Kreatif, empati, dan imajinatif.' },
    { nama:'Aries',       simbol:'♈', tanggal:'21 Mar – 19 Apr', sifat:'Berani, penuh semangat, dan percaya diri.' },
    { nama:'Taurus',      simbol:'♉', tanggal:'20 Apr – 20 Mei', sifat:'Setia, sabar, dan menyukai kenyamanan.' },
    { nama:'Gemini',      simbol:'♊', tanggal:'21 Mei – 20 Jun', sifat:'Cerdas, adaptif, dan komunikatif.' },
    { nama:'Cancer',      simbol:'♋', tanggal:'21 Jun – 22 Jul', sifat:'Penyayang, intuitif, dan protektif.' },
    { nama:'Leo',         simbol:'♌', tanggal:'23 Jul – 22 Agt', sifat:'Karismatik, murah hati, dan percaya diri.' },
    { nama:'Virgo',       simbol:'♍', tanggal:'23 Agt – 22 Sep', sifat:'Analitis, perfeksionis, dan pekerja keras.' },
    { nama:'Libra',       simbol:'♎', tanggal:'23 Sep – 22 Okt', sifat:'Diplomatik, adil, dan menyukai harmoni.' },
    { nama:'Scorpio',     simbol:'♏', tanggal:'23 Okt – 21 Nov', sifat:'Penuh tekad, berani, dan misterius.' },
    { nama:'Sagittarius', simbol:'♐', tanggal:'22 Nov – 21 Des', sifat:'Petualang, optimis, dan jujur.' },
  ];
  if ((b===12&&h>=22)||(b===1&&h<=19))  return list[0];
  if ((b===1 &&h>=20)||(b===2&&h<=18))  return list[1];
  if ((b===2 &&h>=19)||(b===3&&h<=20))  return list[2];
  if ((b===3 &&h>=21)||(b===4&&h<=19))  return list[3];
  if ((b===4 &&h>=20)||(b===5&&h<=20))  return list[4];
  if ((b===5 &&h>=21)||(b===6&&h<=20))  return list[5];
  if ((b===6 &&h>=21)||(b===7&&h<=22))  return list[6];
  if ((b===7 &&h>=23)||(b===8&&h<=22))  return list[7];
  if ((b===8 &&h>=23)||(b===9&&h<=22))  return list[8];
  if ((b===9 &&h>=23)||(b===10&&h<=22)) return list[9];
  if ((b===10&&h>=23)||(b===11&&h<=21)) return list[10];
  return list[11];
}

/* ── TOMBOL CEK ZODIAK ────────────────────────────────────── */
function cekZodiak() {
  const zodiak = getZodiak(tanggalLahir);
  alert(
    'HASIL CEK ZODIAK \n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '  Nama     : ' + nama + '\n' +
    '  Lahir    : ' + formatTanggal(tanggalLahir) + '\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '  Zodiak   : ' + zodiak.simbol + '  ' + zodiak.nama + '\n' +
    '  Periode  : ' + zodiak.tanggal + '\n' +
    '  Karakter : ' + zodiak.sifat + '\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━'
  );
  tampilkanZodiak(zodiak);
}

function tampilkanZodiak(zodiak) {
  const chip = document.getElementById('chipZodiak');
  if (chip) { chip.textContent = zodiak.simbol + ' ' + zodiak.nama; chip.classList.remove('hidden'); }
  const icon = document.getElementById('cardZodiakIcon');
  const val  = document.getElementById('cardZodiak');
  if (icon) icon.textContent = zodiak.simbol;
  if (val)  val.textContent  = zodiak.nama;
}

/* ── RENDER FILM CARDS ────────────────────────────────────── */
function renderFilm() {
  const grid = document.getElementById('filmsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  filmFavorit.forEach(function(film, i) {
    const persen = ((film.rating / 10) * 100).toFixed(0);
    const card   = document.createElement('div');
    card.className = 'film-card';
    card.style.animationDelay = (i * 0.18) + 's';
    card.style.setProperty('--card-color', film.warna);

    card.innerHTML =
      '<div class="film-poster-wrap">' +
        '<img class="film-poster" src="' + film.poster + '" alt="Poster ' + film.judul + '" loading="lazy" />' +
        '<div class="film-poster-overlay"></div>' +
        '<div class="film-rank">#' + (i+1) + '</div>' +
        '<div class="film-rating-badge">★ ' + film.rating.toFixed(1) + '</div>' +
      '</div>' +
      '<div class="film-body">' +
        '<h3 class="film-judul">' + film.judul + '</h3>' +
        '<div class="film-meta">' +
          '<span class="film-year">' + film.tahun + '</span>' +
          '<span class="dot">·</span>' +
          '<span class="film-genre">' + film.genre + '</span>' +
        '</div>' +
        '<p class="film-desc">' + film.deskripsi + '</p>' +
        '<div class="film-bar-wrap">' +
          '<span class="film-bar-label">Rating</span>' +
          '<span class="film-bar-pct">' + film.rating.toFixed(1) + '/10</span>' +
        '</div>' +
        '<div class="film-bar">' +
          '<div class="film-bar-fill" style="width:0%" data-w="' + persen + '%"></div>' +
        '</div>' +
      '</div>';

    grid.appendChild(card);
  });

  // Animasi bar
  setTimeout(function() {
    document.querySelectorAll('.film-bar-fill').forEach(function(b) {
      b.style.width = b.dataset.w;
    });
  }, 400);
}

/* ── ISI DATA PROFIL ──────────────────────────────────────── */
function isiDataProfil() {
  var set = function(id, val) { var el=document.getElementById(id); if(el) el.textContent=val; };
  set('heroNama',       nama);
  set('heroPekerjaan',  pekerjaan);
  set('chipTanggal',    formatTanggal(tanggalLahir));
  set('chipUsia',      hitungUsia(tanggalLahir) + ' tahun');
  set('cardNama',       nama);
  set('cardPekerjaan',  pekerjaan);
  set('cardLahir',      formatTanggal(tanggalLahir));
  set('footerNama',     nama);
  set('tahunSekarang',  new Date().getFullYear());

  var av = document.getElementById('avatarInitials');
  if (av) av.textContent = nama.split(' ').map(function(n){ return n[0]; }).join('');
}

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  isiDataProfil();
  renderFilm();
});
