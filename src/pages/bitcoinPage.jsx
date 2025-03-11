import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, TrendingUp, LineChart, ShieldCheck } from 'lucide-react';
import BackgroundImage from '../assets/banner.png';

const BitcoinCourse = () => {
  const navigate = useNavigate();

  const marketFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Mercado 24/7",
      description: "Opera en cualquier momento del día, sin horarios restringidos como en los mercados tradicionales."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Alta Volatilidad",
      description: "Aprovecha los grandes movimientos de precio para maximizar tus ganancias."
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "Tecnología Blockchain",
      description: "Entiende cómo funciona la tecnología detrás de Bitcoin y su impacto en el mercado."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Descentralización",
      description: "Un mercado libre de intermediarios y manipulaciones."
    }
  ];

  const tradingAdvantages = [
    {
      title: "Análisis Técnico",
      points: [
        "Uso de indicadores cripto-específicos",
        "Identificación de tendencias alcistas y bajistas",
        "Soporte y resistencia en gráficos de velas",
        "Patrones de reversión y continuación"
      ]
    },
    {
      title: "Gestión de Riesgo",
      points: [
        "Stop-loss y take-profit dinámicos",
        "Diversificación de portafolio",
        "Manejo de la volatilidad extrema",
        "Protección contra caídas bruscas"
      ]
    },
    {
      title: "Estrategias de Trading",
      points: [
        "Analisis fundamental de mercados cripto",
        "Swing trading en tendencias claras",
        "Inversiones a largo plazo (HODL)",
        "Uso de futuros y opciones"
      ]
    }
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trading de Bitcoin
          </h1>
          <p className="bg-blue-600 text-white p-4 rounded-full text-xl mb-8 max-w-3xl mx-auto">
            Domina el mercado de criptomonedas con estrategias probadas y análisis técnico avanzado
          </p>
        </div>
      </section>

      {/* Market Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué Bitcoin?</h2>
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

      {/* Trading Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Metodología Bitcoin</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tradingAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-center">{advantage.title}</h3>
                <ul className="space-y-3">
                  {advantage.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Horarios de Trading</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Mercado 24/7</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Opera en cualquier momento</li>
                  <li>Sin horarios restringidos</li>
                  <li>Flexibilidad total</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Estrategias</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Trading tradicional en tendencias</li>
                  <li>Swing trading en tendencias</li>
                  <li>Inversiones a largo plazo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Domina el Trading de Bitcoin</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Aprende a operar en el mercado de criptomonedas con estrategias probadas y mentoría personalizada
          </p>
          <button 
            onClick={() => navigate("/landing")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Planes de Mentoría
          </button>
        </div>
      </section>
    </div>
  );
};

export default BitcoinCourse;