export type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  isHeadline?: boolean;
};

export const categories = [
  { name: 'Nasional', slug: 'nasional' },
  { name: 'Ekonomi', slug: 'ekonomi' },
  { name: 'Olahraga', slug: 'olahraga' },
  { name: 'Teknologi', slug: 'teknologi' },
  { name: 'Kepulauan Riau', slug: 'kepri' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Harga Ikan di Batam Naik 20% Jelang Akhir Tahun',
    excerpt: 'Kenaikan ini dipicu oleh cuaca buruk yang menghambat aktivitas nelayan di perairan Kepulauan Riau selama sepekan terakhir.',
    category: 'Kepulauan Riau',
    author: 'Ikbal',
    date: '18 Oktober 2026',
    image: 'https://picsum.photos/seed/ikan/800/600',
    isHeadline: true,
  },
  {
    id: '2',
    title: 'Pemerintah Batam Resmikan Jembatan Baru Penghubung Barelang',
    excerpt: 'Infrastruktur senilai Rp 450 miliar ini diharapkan mempercepat mobilitas warga dan mendorong pertumbuhan ekonomi.',
    category: 'Kepulauan Riau',
    author: 'Tika',
    date: '18 Oktober 2026',
    image: 'https://picsum.photos/seed/jembatan/800/600',
    isHeadline: true,
  },
  {
    id: '3',
    title: 'Rupiah Menguat Terhadap Dolar AS di Tengah Pelemahan Ekonomi Global',
    excerpt: 'Bank Indonesia menyebut penguatan ini ditopang oleh arus modal asing yang masuk ke pasar obligasi domestik.',
    category: 'Ekonomi',
    author: 'Redaksi',
    date: '17 Oktober 2026',
    image: 'https://picsum.photos/seed/rupiah/800/600',
  },
  {
    id: '4',
    title: 'Timnas Indonesia Lolos ke Semifinal Piala AFF',
    excerpt: 'Kemenangan dramatis 2-1 atas Vietnam membawa Garuda melaju ke babak berikutnya.',
    category: 'Olahraga',
    author: 'Redaksi',
    date: '17 Oktober 2026',
    image: 'https://picsum.photos/seed/bola/800/600',
  },
  {
    id: '5',
    title: 'OpenAI Rilis Model AI Baru, Klaim Lebih Cepat 3x Lipat',
    excerpt: 'Model terbaru ini diklaim mampu memproses satu juta token dalam hitungan detik.',
    category: 'Teknologi',
    author: 'Redaksi',
    date: '17 Oktober 2026',
    image: 'https://picsum.photos/seed/ai/800/600',
  },
  {
    id: '6',
    title: 'Kunjungan Wisatawan ke Batam Naik 35% Kuartal Ini',
    excerpt: 'Sektor pariwisata mulai pulih setelah pandemi, dengan dominasi wisatawan dari Singapura dan Malaysia.',
    category: 'Kepulauan Riau',
    author: 'Tika',
    date: '16 Oktober 2026',
    image: 'https://picsum.photos/seed/wisata/800/600',
  },
  {
    id: '7',
    title: 'Harga BBM Bersubsidi Tak Berubah Hingga Akhir Tahun',
    excerpt: 'Pemerintah memastikan tidak ada kenaikan meskipun harga minyak dunia berfluktuasi.',
    category: 'Nasional',
    author: 'Redaksi',
    date: '16 Oktober 2026',
    image: 'https://picsum.photos/seed/bbm/800/600',
  },
  {
    id: '8',
    title: 'Startup Lokal Raih Pendanaan Seri A Rp 120 Miliar',
    excerpt: 'Perusahaan rintisan asal Batam ini fokus pada layanan logistik antar pulau.',
    category: 'Teknologi',
    author: 'Ikbal',
    date: '16 Oktober 2026',
    image: 'https://picsum.photos/seed/startup/800/600',
  },
];
