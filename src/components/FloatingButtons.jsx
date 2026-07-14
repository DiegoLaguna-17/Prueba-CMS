import { MessageCircle, LogOut } from 'lucide-react';

export default function FloatingButtons() {
  const handleExit = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Salida Rápida */}
      <button
        onClick={handleExit}
        className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group relative"
        aria-label="Salida Rápida"
      >
        <LogOut className="h-6 w-6" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Salida Rápida
        </span>
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group relative"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
