import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Layout><AboutMe /></Layout>} />
      <Route path="/AboutMe" element={<Layout><AboutMe /></Layout>} />
      <Route path="/Portfolio" element={<Layout><Portfolio /></Layout>} />
      <Route path="/Contact" element={<Layout><Contact /></Layout>} />
      <Route path="/Resume" element={<Layout><Resume /></Layout>} />
    </Routes>
  );
};

export default App;
