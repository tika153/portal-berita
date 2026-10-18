import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { categories } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Berita Kita — Berita Terkini',
  description: 'Portal berita terpercaya menyajikan berita terkini dari seluruh Indonesia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="bg-red-600 text-white py-2">
          <div className="max-w-6xl mx-auto px-4 text-sm">
            <span className="font-bold mr-2">BREAKING:</span>
            <span>Harga Ikan di Batam Naik 20% Jelang Akhir Tahun</span>
          </div>
        </div>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xl">B</div>
                <h1 className="text-2xl font-black text-gray-900">BERITA KITA</h1>
              </Link>
              <a href="#" className="text-sm text-gray-600 hover:text-red-600">Login</a>
            </div>
            <nav className="border-t border-gray-100">
              <ul className="flex items-center gap-6 py-3 overflow-x-auto">
                <li><Link href="/" className="text-sm font-semibold text-red-600">HOME</Link></li>
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link href={`/kategori/${cat.slug}`} className="text-sm font-semibold text-gray-700 hover:text-red-600 whitespace-nowrap">
                      {cat.name.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-black mb-3">BERITA KITA</h3>
                <p className="text-sm text-gray-400">Portal berita terpercaya menyajikan informasi terkini dari seluruh Indonesia.</p>
              </div>
              <div>
                <h4 className="font-bold mb-3">KATEGORI</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {categories.map((cat) => (
                    <li key={cat.slug}><Link href={`/kategori/${cat.slug}`} className="hover:text-white">{cat.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">TENTANG</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Tentang Kami</li>
                  <li>Redaksi</li>
                  <li>Kontak</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
              © 2026 Berita Kita. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
