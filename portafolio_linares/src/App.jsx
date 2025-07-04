import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import About from './components/About';
import Projects  from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
