import { useEffect, useState } from 'react';

export default function News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      // Usamos import.meta.glob de Vite para leer todos los archivos Markdown 
      // en la carpeta content/posts. ?raw obtiene el texto plano.
      const modules = import.meta.glob('/public/content/posts/*.md', { query: '?raw', import: 'default' });
      const loadedPosts = [];

      for (const path in modules) {
        const content = await modules[path]();
        
        // Extracción sencilla de frontmatter
        const titleMatch = content.match(/title:\s*"(.*?)"/);
        const dateMatch = content.match(/date:\s*"?([^\n"]+)"?/);
        
        const bodyContent = content.replace(/---[\s\S]*?---/, '').trim();
        
        const excerpt = bodyContent.substring(0, 120) + '...';

        if (titleMatch && dateMatch) {
          loadedPosts.push({
            id: path,
            title: titleMatch[1],
            date: new Date(dateMatch[1]).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }),
            excerpt: excerpt
          });
        }
      }
      
      // Ordenamiento por fecha descendente
      loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(loadedPosts);
    }

    fetchPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-[60vh]">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Noticias y Novedades</h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No hay noticias publicadas aún.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
              <div className="p-6 flex-grow">
                <p className="text-sm text-violet-dark font-medium mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </div>
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 mt-auto">
                <button className="text-violet font-semibold hover:text-violet-dark transition-colors">
                  Leer más &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
