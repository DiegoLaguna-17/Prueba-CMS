import { Shield, Heart, HandHeart } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ProgramCard from '../components/ProgramCard';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroCarousel />
      
      {/* Intro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Nuestra Misión
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          En Fundación Levántate Mujer, nos dedicamos a defender los derechos de la mujer,
          ofreciendo apoyo integral para superar situaciones de violencia y trata de personas.
          Creemos en un mundo donde cada mujer pueda vivir libre y con dignidad.
        </p>
      </section>

      {/* Programs Cards */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Programas de Apoyo</h2>
            <p className="mt-4 text-lg text-gray-500">Conoce nuestras principales áreas de acción.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard 
              title="Prevención de Violencia" 
              description="Programas educativos y talleres para identificar y prevenir la violencia." 
              icon={Shield} 
            />
            <ProgramCard
              title="Lucha contra la Trata" 
              description="Acompañamiento a víctimas y sensibilización comunitaria." 
              icon={Heart} 
            />
            <ProgramCard 
              title="Apoyo Integral" 
              description="Asistencia psicológica, legal y social para mujeres vulnerables." 
              icon={HandHeart} 
            />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-violet-light/10">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:justify-between gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Mujeres trabajando juntas" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Juntas somos más fuertes
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestra red de apoyo brinda un espacio seguro donde las mujeres pueden compartir 
                sus experiencias, recibir asesoría profesional y encontrar las herramientas 
                necesarias para reconstruir sus vidas.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-violet p-1 rounded-full text-white mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  Espacios de escucha activa
                </li>
                <li className="flex items-center">
                  <div className="bg-violet p-1 rounded-full text-white mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  Asesoría legal gratuita
                </li>
                <li className="flex items-center">
                  <div className="bg-violet p-1 rounded-full text-white mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  Capacitación para el emprendimiento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-violet text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-6">¿Necesitas Ayuda o Quieres Colaborar?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Estamos aquí para escucharte y apoyarte. Si deseas ser parte del cambio, también puedes unirte como voluntaria.
        </p>
        <a href="/contacto" className="inline-block bg-white text-violet font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
          Contáctanos Ahora
        </a>
      </section>
    </div>
  );
}
