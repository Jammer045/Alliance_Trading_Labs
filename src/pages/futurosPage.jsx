import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, TrendingUp, LineChart, ShieldCheck } from 'lucide-react';
import BackgroundImage from '../assets/banner.png';

const SP500 = () => {
    const navigate = useNavigate();
  const marketFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Horario Específico",
      description: "Mercado activo de 9:30 AM a 4:00 PM EST, permitiendo mejor conciliación trabajo-trading"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Menor Spread",
      description: "Costos de operación más bajos que el mercado Forex, maximizando el potencial de ganancia"
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "Alta Predictibilidad",
      description: "Movimientos más 'limpios' y técnicos, ideal para trading sistemático"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Menor Manipulación",
      description: "Mercado altamente regulado con mayor transparencia en los movimientos"
    }
  ];

  const tradingAdvantages = [
    {
      title: "Análisis Técnico",
      points: [
        "Respeto a niveles clave",
        "Patrones de precio claros",
        "Zonas de soporte y resistencia",
        "Movimientos tendenciales definidos"
      ]
    },
    {
      title: "Gestión de Tiempo",
      points: [
        "Horario fijo de trading",
        "Mejor balance vida-trading",
        "Preparación pre-mercado",
        "Análisis post-mercado"
      ]
    },
    {
      title: "Gestión de Riesgo",
      points: [
        "Stops definidos",
        "Targets claros",
        "Control de volatilidad",
        "Gestión de posición"
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
            Trading SP500
          </h1>
          <p className="bg-blue-600 text-white p-4 rounded-full text-xl mb-8 max-w-3xl mx-auto">
  Opera el índice más importante del mundo con estrategias probadas y precisión técnica
</p>
        </div>
      </section>

      {/* Market Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué el SP500?</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Metodología SP500</h2>
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
                <h3 className="text-xl font-semibold mb-4">Pre-Market</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>4:00 AM - 9:30 AM EST</li>
                  <li>Análisis de gaps</li>
                  <li>Preparación de niveles</li>
                  <li>Revisión de noticias</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Market Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>9:30 AM - 4:00 PM EST</li>
                  <li>Trading activo</li>
                  <li>Gestión de posiciones</li>
                  <li>Monitoreo de niveles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Domina el Trading del SP500</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Aprende a operar el índice más importante del mundo con estrategias probadas y mentoría personalizada
          </p>
          <button 
          onClick={() => navigate("/landing")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Ver Planes de Mentoría
          </button>
        </div>
      </section>
    </div>
  );
};

export default SP500;