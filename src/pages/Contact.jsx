import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../../Store/Slice/contactSlice.js';
import BackgroundImage from '../assets/banner.png';

const Contact = () => {
  const dispatch = useDispatch();
  const { formData, isLoading, error } = useSelector(state => state.contact);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Para probar
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const socialLinks = [
    {
      platform: "TikTok",
      username: "@alliance.trading7",
      followers: "50K+",
      content: "Trading en vivo y educación"
    },
    {
      platform: "Instagram",
      username: "@alliance_trading_labs",
      followers: "25K+",
      content: "Análisis diarios y resultados"
    },
    {
      platform: "YouTube",
      username: "@TradingLabsAccount",
      followers: "10K+",
      content: "Tutoriales y análisis detallados"
    }
  ];

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
            Contáctanos
          </h1>
          <p className="mt-10 bg-blue-600 text-white p-4 rounded-full text-xl mb-8 max-w-3xl mx-auto">
            Estamos aquí para ayudarte en tu journey de trading y retroalización.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">WhatsApp</label>
      <input
        type="tel"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Mensaje</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        required
      ></textarea>
    </div>
    {error && <p className="text-red-600">{error}</p>}
    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
    >
      {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
    </button>
  </form>
            </div>

            {/* Redes Sociales */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">Síguenos en Redes Sociales y ayudanos a crecer</h2>
              {socialLinks.map((social) => (
                <div key={social.platform} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{social.platform}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600"><span className="font-medium">Usuario:</span> {social.username}</p>
                    <p className="text-gray-600"><span className="font-medium">Seguidores:</span> {social.followers}</p>
                    <p className="text-gray-600"><span className="font-medium">Contenido:</span> {social.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;