import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, TrendingUp, LineChart, ShieldCheck, Users } from 'lucide-react';
import BackgoundImage from '../assets/banner.png';
import EurImage from '../assets/eur_usd.png';
import GbpImage from '../assets/libra_usd.png';
import JpyImage from '../assets/jen_japones.png';

const Forex = () => {
    const navigate = useNavigate();
  const marketFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "24/5 Operativo",
      description: "Mercado abierto 24 horas durante 5 días a la semana, permitiendo operar en cualquier momento"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Alta Liquidez",
      description: "El mercado más líquido del mundo con más de $6.6 trillones en volumen diario"
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "Apalancamiento",
      description: "Oportunidad de operar posiciones más grandes con un capital menor"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Bajo Costo",
      description: "Spreads competitivos y bajos costos de transacción"
    }
  ];

  const tradingPairs = [
    {
      pair: "EUR/USD",
      description: "El par más operado, representa el 24% del volumen diario",
      bestHours: "8:00 AM - 12:00 PM EST",
      volatility: "Media",
      image: EurImage
    },
    {
      pair: "GBP/USD",
      description: "Alta volatilidad y excelentes oportunidades de trading",
      bestHours: "3:00 AM - 12:00 PM EST",
      volatility: "Alta",
      image: GbpImage
    },
    {
      pair: "USD/JPY",
      description: "Par favorito durante la sesión asiática",
      bestHours: "7:00 PM - 4:00 AM EST",
      volatility: "Media-Alta",
      image: JpyImage
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: `url(${BackgoundImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Fondo oscuro semitransparente para mejorar la legibilidad */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mercado Forex
          </h1>
          <p className="bg-blue-600 text-white p-4 rounded-full text-xl mb-8 max-w-3xl mx-auto">
  Aprende a operar en el mercado financiero más grande del mundo con estrategias probadas y mentorías personalizadas
</p>


        </div>
      </section>

      {/* Market Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Características del Mercado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Pairs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Principales Pares de Divisas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tradingPairs.map((pair, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={pair.image} alt={pair.pair} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pair.pair}</h3>
                  <p className="text-gray-600 mb-4">{pair.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-semibold">Mejor horario:</span> {pair.bestHours}</p>
                    <p className="text-sm"><span className="font-semibold">Volatilidad:</span> {pair.volatility}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestra Metodología</h2>
            <p className="text-gray-600">Aprende una metodología completa y probada para operar en el mercado Forex</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Análisis Técnico</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Patrones de precio</li>
                <li>• Niveles clave</li>
                <li>• Indicadores técnicos</li>
                <li>• Gestión de riesgo</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Psicología del Trading</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Control emocional</li>
                <li>• Disciplina operativa</li>
                <li>• Manejo de pérdidas</li>
                <li>• Desarrollo de confianza</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Gestión de Capital</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Tamaño de posición</li>
                <li>• Gestión de riesgo</li>
                <li>• Diversificación</li>
                <li>• Plan de trading</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de traders y aprende a operar en el mercado Forex con confianza y consistencia
          </p>
          <button 
          onClick={() => navigate('/landing')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Ver Planes de Mentoría
          </button>
        </div>
      </section>
    </div>
  );
};

export default Forex;