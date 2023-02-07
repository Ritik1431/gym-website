// import logo from './logo.svg';
import React from 'react';
import About from './Components/About';
import Contect from './Components/Contect';
import Feature from './Components/Feature';
import Header from './Components/home';
import Navbar from './Components/Navbar';
import Offer from './Components/Offer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contect />
    
    </div>
  );
}

export default App;
