import { useNavigate } from 'react-router-dom';
import notFound_Image from '../assets/notFound_crash.jpg';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="relative max-w-xl w-full text-center p-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <img 
          src={notFound_Image}
          alt="404 Illustration" 
          className="mx-auto max-w-md w-full h-auto mb-8"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ¡Oops! Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al inicio
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Página anterior
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;