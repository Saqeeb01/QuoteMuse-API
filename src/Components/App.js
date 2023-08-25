import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import GettingStarted from './GettingStarted';
import Authentication from './Authentication';
import Examples from './Examples';
import Support from './Support';
import Endpoints from './Endpoints';
import Footer from './Footer';
import Welcome from './Welcome'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
    <Route path="*" element={<Home />} /> Use the Home component
    <Route path="/getting-started" element={<GettingStarted />} />
    <Route path="/authentication" element={<Authentication />} />
    <Route path="/examples" element={<Examples />} />
    <Route path="/endpoints" element={<Endpoints />} />
    <Route path="/support" element={<Support />} />
    <Route path="/footer" element={<Footer />} />
    <Route path="/welcome" element={<Welcome />} />
  </Routes>
  <Footer />
  </>
  );
};

export default App;
