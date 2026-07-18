import React from 'react';
import ParticleCanvas from './components/shared/ParticleCanvas';
import CustomCursor from './components/shared/CustomCursor';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Journey from './components/Journey/Journey';
import Work from './components/Work/Work';
import Projects from './components/Projects/Projects';
import Impact from './components/Impact/Impact';
import Evolution from './components/Evolution/Evolution';
import Connect from './components/Connect/Connect';

function App() {
  return (
    <>
      <ParticleCanvas />
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <Journey />
        <Work />
        <Projects />
        <Impact />
        <Evolution />
        <Connect />
      </main>
    </>
  );
}

export default App;
