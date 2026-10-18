import Link from 'next/link';
import { articles, categories } from '@/lib/articles';

export default function HomePage() {
  const headlines = articles.filter((a) => a.isHeadline).slice(0, 2);
  const others = articles.filter((a) => !a.isHeadline);
  const mainHeadline = headlines[0];
  const secondaryHeadline = headlines[1];

  return (
    <div className="space-y-10">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-red-600"></div>
          <h2 className="text-xl font-black">HEADLINE</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mainHeadline && (
            <Link href={`/artikel/${mainHeadline.id}`} className="md:col-span-2 group relative overflow-hidden rounded-lg block">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={mainHeadline.image} alt={mainHeadline.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block bg-red-600 text-xs font-bold px-2 py-1 rounded mb-3">{mainHeadline.category}</span>
                <h3 className="text-2xl md:text-3xl font-black leading-tight mb-2">{mainHeadline.title}</h3>
                <p className="text-sm text-gray-200 line-clamp-2">{mainHeadline.excerpt}</p>
                <div className="mt-3 text-xs text-gray-300">{mainHeadline.author} · {mainHeadline.date}</div>
              </div>
            </Link>
          )}
          {secondaryHeadline && (
            <Link href={`/artikel/${secondaryHeadline.id}`} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={secondaryHeadline.image} alt={secondaryHeadline.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded mb-2">{secondaryHeadline.category}</span>
                <h3 className="font-bold leading-snug group-hover:text-red-600 line-clamp-3">{secondaryHeadline.title}</h3>
                <div className="mt-3 text-xs text-gray-500">{secondaryHeadline.date}</div>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-red-600"></div>
          <h2 className="text-xl font-black">BERITA TERBARU</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((article) => (
            <Link key={article.id} href={`/artikel/${article.id}`} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <span className="inline-block bg-gray-100 text-gray-700 text-xs font-bold px-2 py-1 rounded mb-2">{article.category}</span>
                <h3 className="font-bold leading-snug group-hover:text-red-600 line-clamp-2 min-h-[3rem]">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{article.excerpt}</p>
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 flex justify-between">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-red-600"></div>
          <h2 className="text-xl font-black">KATEGORI</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/kategori/${cat.slug}`} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
              {cat.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
