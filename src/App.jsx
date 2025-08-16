// src/App.jsx
import React, { useEffect } from 'react'; // Import useEffect
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// Create a component to handle the scroll-to-top logic
// This component uses the useLocation hook and must be inside the Router context,
// which is provided by BrowserRouter in your main app setup (usually index.jsx).
function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    // Scroll to the top of the page whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: effect runs when pathname changes

  // This component doesn't render anything visible
  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Place the ScrollToTop component here, inside the main App structure */}
      <ScrollToTop />
      
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;