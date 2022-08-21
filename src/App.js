import React from 'react'
import './index.css';
import Header from "./components/Header";
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Menu from './sections/Menu';
import Application from './sections/App';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Menu />
      <Application />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

