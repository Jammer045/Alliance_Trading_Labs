import React from 'react';
import BackgroundImage from '../assets/banner.png';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sobre Nosotros
          </h1>
          <p className="mt-10 bg-blue-600 text-white p-4 rounded-full text-xl mb-8 max-w-3xl mx-auto">
            Formando traders rentables y consistentes en el mercado financiero.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-gray-600">
                Proporcionar educación de trading de alta calidad y mentoría personalizada 
                para ayudar a nuestros estudiantes a alcanzar la consistencia y rentabilidad 
                en los mercados financieros.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-gray-600">
                Ser reconocidos como la principal plataforma de educación en trading, 
                destacando por nuestra transparencia, resultados verificables y 
                compromiso con el éxito de nuestros estudiantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestra Historia</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <p className="text-gray-600">
                Alliance Trading Labs nació de la necesidad de proporcionar educación 
                de trading de calidad y transparente. Después de años de experiencia 
                en los mercados financieros, decidimos compartir nuestro conocimiento 
                y metodología probada con otros traders.
              </p>
              <p className="text-gray-600">
                Nuestra metodología se ha refinado a través de años de operación en 
                mercados reales, adaptándose a diferentes condiciones y escenarios, 
                lo que nos permite ofrecer estrategias robustas y probadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué Elegirnos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Transparencia Total</h3>
              <p className="text-gray-600">
                Mostramos resultados reales y verificables de nuestras operaciones 
                diarias a través de nuestro sistema de tracking en los Principales Mercados Financieros.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Mentoría Personalizada</h3>
              <p className="text-gray-600">
                Atención individual para cada estudiante, adaptando la enseñanza a 
                su nivel y objetivos específicos.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Metodología Probada</h3>
              <p className="text-gray-600">
                Estrategias y técnicas que han demostrado su efectividad en 
                condiciones reales de mercado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;