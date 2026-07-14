export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Contáctanos</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input type="text" id="name" className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet focus:ring-violet sm:text-base p-3 border outline-none transition-shadow" placeholder="Tu nombre" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input type="email" id="email" className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet focus:ring-violet sm:text-base p-3 border outline-none transition-shadow" placeholder="tu@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea id="message" rows="4" className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet focus:ring-violet sm:text-base p-3 border outline-none transition-shadow" placeholder="¿En qué podemos ayudarte?"></textarea>
          </div>
          <div className="pt-2">
            <button type="button" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-base font-bold text-white bg-violet hover:bg-violet-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet transition-colors">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
