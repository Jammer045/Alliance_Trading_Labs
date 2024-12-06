import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../Store/store.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Forex from './pages/Forex';
import SP500 from './pages/futurosPage.jsx';
import Contact from './pages/Contact';
import AboutUs from './pages/aboutUs';
import LandingPage from './pages/landingpage.jsx';
import TradingTracker from './pages/trackingpage.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/forex" element={<Forex />} />
            <Route path="/sp500" element={<SP500 />} />
            <Route path="/tracker" element={<TradingTracker />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;