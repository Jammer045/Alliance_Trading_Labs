import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';
import BackgoundImage from '../assets/banner.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Estrategias Comprobadas",
      description: "Aprende técnicas de trading que han sido probadas por mas de 9 años en mercados reales"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Horario Flexible",
      description: "Sesiones adaptadas a tu disponibilidad horaria"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Mentoría Personalizada",
      description: "Atención individual para maximizar tu aprendizaje"
    }
  ];

  const forexPackages = [
    {
      title: "Introduccion al Forex",
      price: "50",
      features: [
        "Acceso unicamente a 1 modulo",
        "Acceso a material básico de Forex",
        "Introduccion a la cartografia del mercado",
        "Explicacion de conceptos básicos"
      ]
    },
    {
      title: "Forex Básico",
      price: "299",
      features: [
        "Acceso ilimitado por 1 año",
        "Acceso a material básico de Forex",
        "Acceso a nuestra estrategia",
        "Fundamentos Avanzados",
        "Soporte por email",
        "Retroalimentación de tus trades"
      ]
    },
    {
      title: "Forex Premium",
      price: "499 USD",
      features: [
        "Acceso ilimitado",
        "Sesiones de mentoría ilimitadas", 
        "Material completo de Forex",
        "Soporte prioritario",
        "Acceso a herramientas avanzadas (IA, bots, etc.)",
        "Explicaciones detalladas de las estrategias",
        "Revisión detallada de tus trades",
        "Análisis de todos los pares",
        "Devolucion del 10% al finalizar el curso"
      ]
    }
  ];

  const sp500Packages = [
    {
      title: "Introduccion al SP500", 
      price: "50",
      features: [
        "Acceso unicamente a 1 modulo",
        "Acceso a material básico de SP500",
        "Introduccion a la cartografia del mercado",
        "Explicacion de conceptos básicos"
      ]
    },
    {
      title: "SP500 Básico",
      price: "299", 
      features: [
        "Acceso ilimitado por 1 año",
        "Acceso a material básico de SP500",
        "Acceso a nuestra estrategia",
        "Fundamentos Avanzados",
        "Soporte por email",
        "Retroalimentación de tus trades"
      ]
    },
    {
      title: "SP500 Premium",
      price: "499 USD",
      features: [
        "Acceso ilimitado",
        "Sesiones de mentoría ilimitadas",
        "Material completo de SP500",
        "Soporte prioritario",
        "Acceso a herramientas avanzadas (IA, bots, etc.)",
        "Explicaciones detalladas de las estrategias",
        "Revisión detallada de tus trades",
        "Análisis profundo del mercado",
        "Devolucion del 10% al finalizar el curso"
      ]
    }
  ];

  const bitcoinPackages = [
    {
      title: "Introducción al Bitcoin",
      price: "50",
      features: [
        "Acceso únicamente a 1 módulo",
        "Acceso a material básico de Bitcoin",
        "Introducción a la tecnología blockchain",
        "Explicación de conceptos básicos"
      ]
    },
    {
      title: "Bitcoin Básico",
      price: "299",
      features: [
        "Acceso ilimitado por 1 año",
        "Acceso a material básico de Bitcoin",
        "Acceso a nuestra estrategia",
        "Fundamentos avanzados de criptomonedas",
        "Soporte por email",
        "Retroalimentación de tus trades"
      ]
    },
    {
      title: "Bitcoin Premium",
      price: "499 USD",
      features: [
        "Acceso ilimitado",
        "Sesiones de mentoría ilimitadas",
        "Material completo de Bitcoin",
        "Soporte prioritario",
        "Acceso a herramientas avanzadas (IA, bots, etc.)",
        "Explicaciones detalladas de las estrategias",
        "Revisión detallada de tus trades",
        "Análisis profundo del mercado de criptomonedas",
        "Devolución del 10% al finalizar el curso"
      ]
    }
  ];

  const PricingSection = ({ title, packages }) => (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <div key={index} className={`border-2 rounded-lg p-6 bg-white shadow-md ${
              pkg.title.includes("Premium") ? "border-blue-500 relative overflow-hidden" : ""
            }`}>
              {pkg.title.includes("Premium") && (
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold">{pkg.title}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                  {pkg.title.includes("Introduccion") && <span className="text-gray-600">usd/mes</span>}
                  {pkg.title.includes("Básico") && <span className="text-gray-600">usd/año</span>}
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/contact')}
                className={`w-full mt-6 px-6 py-3 rounded-lg transition-colors ${
                  pkg.title.includes("Premium")
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Seleccionar Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section con Banner */}
      <div className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${BackgoundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Domina el Trading con Mentoría Profesional
            </h1>
            <p className="mt-40 text-xl text-gray-100">
              Aprende estrategias probadas y alcanza la independencia financiera
            </p>
          </div>
        </div>
      </div>

      {/* Features Section con fondo blanco para contraste */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-2">
                <div className="flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mt-4">{feature.title}</h3>
                <p className="text-center text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Sections */}
      <PricingSection title="Planes de Mentoría Forex" packages={forexPackages} />
      <PricingSection title="Planes de Mentoría SP500" packages={sp500Packages} />
      <PricingSection title="Planes de Mentoría Bitcoin" packages={bitcoinPackages} />
    </div>
  );
};

export default LandingPage;