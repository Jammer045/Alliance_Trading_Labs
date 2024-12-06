import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import LandingPage from './pages/landingpage';
import TradingTracker from './pages/trackingpage';
import Forex from './pages/forex';
import SP500 from './pages/futurosPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/tracker" element={<TradingTracker />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/sp500" element={<SP500 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;