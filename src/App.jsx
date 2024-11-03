import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation/Navigation';
import Header from './components/pages/Header/Header';
import Portfolio from './components/pages/Portfolio/Portfolio';
import ServicesPage from './components/pages/ServicesPage/ServicesPage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Team from './components/pages/Team/Team';
import PricePage from './components/pages/PricePage/PricePage';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate loading delay (replace with your actual data fetching logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate a 1.5 second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Conditionally render loading spinner */}
      {isLoading && <LoadingSpinner loading={isLoading} />}

      {/* Render content after loading */}
      {!isLoading && (
        <div className="content">
          <div className="relative min-h-screen">
            {/* Background image and overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("./images/image1.jpg")', filter: 'brightness(0.7) contrast(1.2)' }}
            ></div>
            <div className="absolute inset-0" style={{ backgroundColor: '#444B51', opacity: 0.7 }}></div>

            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              <Header />
            </div>
          </div>

          {/* Additional components */}
          <ServicesPage />
          <Portfolio />
          <Team />
          <PricePage />
          <Blog />
          <br></br>
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;


















