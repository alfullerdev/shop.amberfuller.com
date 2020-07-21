import React from 'react';
import './App.css';
/*import Nav from './components/nav.js';*/
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Artwork from './components/Artwork.js'
/*import PaypalExpressBtn from './components/PayPalExpressCheckOut';*/

function App() {
  return (
    <div className="App">
      <Header />
      <Artwork />
      <Footer />
    </div>
  );
}

export default App;
