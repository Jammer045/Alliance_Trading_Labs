import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BackgroundImage from '../assets/banner.png';
import Imagen1 from '../assets/analisis_tecnico.jpeg';
import Imagen2 from '../assets/gestion_riesgo.png';
import Imagen3 from '../assets/psico_trading.png';
import Imagen4 from '../assets/Forex.png';
import Imagen5 from '../assets/SP500.jpg';
import Imagen6 from '../assets/mentoria.jpeg';
import Imagen7 from '../assets/indicadores-trading-main.jpg';
import Imagen8 from '../assets/FUTUROS.png';
import Imagen9 from '../assets/metodologia_profesional.jpg';
import Imagen10 from '../assets/finanzas-bursatiles.jpg';
import Imagen11 from '../assets/BUWBAOAXXNEOLIV6DLE6IFA6GY.jpg';
import Imagen12 from '../assets/3-transparencia-y-confianza.jpg';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      id: 1,
      title: "Análisis Técnico",
      description: "Aprende a leer gráficos y patrones",
      image: Imagen1
    },
    {
      id: 2,
      title: "Gestión de Riesgo",
      description: "Protege tu capital con estrategias efectivas",
      image: Imagen2
    },
    {
      id: 3,
      title: "Psicología Trading",
      description: "Domina tus emociones en el mercado",
      image: Imagen3
    },
    {
      id: 4,
      title: "Mercado de Forex",
      description: "Fundamentos del mercado de divisas",
      image: Imagen4
    },
    {
      id: 5,
      title: "Trading SP500",
      description: "Estrategias para el mercado de acciones",
      image: Imagen5
    },
    {
      id: 6,
      title: "Mentorias personalizadas",
      description: "Estaras recibiendo retroalizaciones de tus estrategias",
      image: Imagen6
    },
    {
      id: 7,
      title: "Herramientas de trading",
      description: "Hacemos uso de herramientas avanzadas",
      image: Imagen7
    },
    {
      id: 8,
      title: "Trading de Futuros",
      description: "Estrategias para el mercado de futuros",
      image: Imagen8
    },
    {
      id: 9,
      title: "Metodologia profesional",
      description: "Utilizamos metodologias profesionales",
      image: Imagen9
    },
    {
      id: 10,
      title: "Experiencias reales",
      description: "Experiencias de años en mercados reales",
      image: Imagen10
    },
    {
      id: 11,
      title: "Trading de Bolsa de Valores",
      description: "Estrategias para el mercado de bolsa de valores",
      image: Imagen11
    },
    {
      id: 12,
      title: "Transparencia",
      description: "Somos transparentes y confiables",
      image: Imagen12
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section con Banner */}
      <section className="relative h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            ALLIANCE TRADING LABS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Trading Education & Research
          </p>
          <button 
            onClick={() => navigate('/landing')}
            className="mt-14 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Comienza Ahora
          </button>
        </div>
      </section>

      {/* Call to Action with Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CTA Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforma tu Trading con Mentoría Profesional
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro programa de mentoría te proporcionará las herramientas, 
                estrategias y el conocimiento necesario para operar con confianza 
                en los mercados financieros. Aprenderás directamente de traders 
                experimentados que te guiarán en cada paso del camino.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Estrategias personalizadas para tu estilo de trading
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Sesiones one-on-one con traders profesionales
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Acceso a herramientas y recursos exclusivos
                </li>
              </ul>
              <button 
              onClick={() => navigate('/landing')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Descubre Nuestros Programas
              </button>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {[0, 1, 2].map((slideIndex) => (
                    <div key={slideIndex} className="flex-none w-full grid grid-cols-2 gap-4 p-4">
                      {carouselItems.slice(slideIndex * 4, (slideIndex + 1) * 4).map((item) => (
                        <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                          />
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide} 
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide} 
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;