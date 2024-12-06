// src/components/Footer.jsx
import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';

const TiktokIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.02 5.79 5.79 0 0 1-3.324-1.446A5.724 5.724 0 0 1 13.69 0h-3.084v16.446c0 1.97-1.612 3.572-3.592 3.572a3.583 3.583 0 0 1-3.592-3.572 3.583 3.583 0 0 1 3.592-3.572c.263 0 .518.028.764.082V9.423c-.251-.023-.507-.035-.764-.035C3.146 9.388 0 12.517 0 16.446 0 20.375 3.146 23.504 7.014 23.504c3.867 0 7.014-3.129 7.014-7.058V7.825a9.044 9.044 0 0 0 5.294 1.688v-3.95Z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <TiktokIcon size={20} />, url: 'https://www.tiktok.com/@alliance.trading7', label: 'Tiktok' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/alliance_trading_labs/profilecard/?igsh=MWJrN3JianR2Ym1scA==', label: 'Instagram' },
    { icon: <Youtube size={20} />, url: 'https://www.youtube.com/@TradingLabsAccount', label: 'Youtube' },
  ];

  const footerLinks = {
    'Servicios': [
      { label: 'Curso de Forex', url: '#' },
      { label: 'Curso SP500', url: '#' },
      { label: 'Mentorias Progrmadas', url: '#' },
      { label: 'Análisis de Mercado', url: '#' },
    ],
    'Recursos': [
      { label: 'Blog', url: '#' },
      { label: 'Tutoriales', url: '#' },
      { label: 'E-books', url: '#' },
      { label: 'Webinars', url: '#' },
    ],
    'Compañía': [
      { label: 'Sobre Nosotros', url: '#' },
      { label: 'Contacto', url: '#' },
      { label: 'Términos y Condiciones', url: '#' },
      { label: 'Política de Privacidad', url: '#' },
    ],
  };

  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section with logo and social */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="text-[#3b82f6] font-bold text-xl">ALLIANCE</span>
              <span className="text-white font-bold text-xl ml-2">TRADING LABS</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Trading Education & Research</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold mb-2">Suscríbete a nuestro newsletter</h3>
            <p className="text-gray-400 mb-4">Recibe las últimas actualizaciones y noticias del mercado</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors duration-200 flex items-center">
                <Mail size={20} className="mr-2" />
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Alliance Trading Labs. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;