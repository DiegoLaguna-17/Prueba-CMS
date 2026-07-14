export default function Programs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Nuestros Programas</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-violet mb-4">Atención Integral</h2>
          <p className="text-gray-600 mb-4">
            Brindamos atención psicológica, asesoría legal y trabajo social a mujeres 
            sobrevivientes de violencia en el ámbito familiar y público.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2 font-medium">
            <li>Terapia individual y grupal</li>
            <li>Acompañamiento en procesos legales</li>
            <li>Gestión de casos sociales</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-violet mb-4">Prevención y Educación</h2>
          <p className="text-gray-600 mb-4">
            Desarrollamos procesos de formación y sensibilización con jóvenes, mujeres 
            y comunidad en general para prevenir la violencia basada en género.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2 font-medium">
            <li>Talleres en unidades educativas</li>
            <li>Campañas de comunicación</li>
            <li>Escuelas de liderazgo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
