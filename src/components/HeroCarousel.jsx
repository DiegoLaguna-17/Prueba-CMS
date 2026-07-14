import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function HeroCarousel() {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Apoyo y Esperanza',
      subtitle: 'Trabajamos para empoderar a la mujer y restituir sus derechos.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Prevención de Violencia',
      subtitle: 'Creando entornos seguros para un futuro sin miedo.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Contra la Trata',
      subtitle: 'Luchamos incansablemente por la libertad y la dignidad.',
    }
  ];

  return (
    <div className="relative h-[80vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link
                  to="/contacto"
                  className="bg-violet hover:bg-violet-dark text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
