import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Departments from './components/Departments';
import Admissions from './components/Admissions';
import Placements from './components/Placements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Departments />
        <Placements />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
