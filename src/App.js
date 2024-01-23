import React from 'react';
import Home from "./components/layout/Home"
import About from "./components/layout/About"
import Skills from "./components/layout/Skills"
import Experience from "./components/layout/Experience"
import Articles from "./components/layout/Articles"
import Footer from './components/layout/Footer'
import './styles/App.css'

function App() {
  
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
