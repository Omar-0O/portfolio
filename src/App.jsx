import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Hero,
  Navbar,
  About,
  Skills,
  Experience,
  Works,
  Contact,
  StarsCanvas,
  Loader,
  AdditionalWorks,
} from './components';

import TechSlider from './components/TechSlider';
import { ToastContainer } from 'react-toastify';
import { PERSONAL_INFO } from './constants';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar />
          <div className="relative z-0 overflow-x-hidden bg-primary isolate">
            <ToastContainer />

            <div className="fixed top-0 z w-[clamp(500px,120vw,1200px)] aspect-square bg-gradient-radial-2 opacity-30 rounded-full blur-[5vw] animate-blob1"></div>
            <StarsCanvas />
            <Hero />

            <About />
            <TechSlider />
            <Skills />

            <Experience />


            <Works />
            <AdditionalWorks />
            <div className="relative z-0">
              <Contact />

              <footer className="w-full py-6 font-medium text-center border-t footer border-white/5 text-white-200 text-sm">
                &copy; 2026 Omar Mohamed Ahmed El-Sayed. All rights reserved.
              </footer>
            </div>
          </div>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;

