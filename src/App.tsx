import React from 'react';
import ProductContainer from './containers/ProductContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductContainer />
      <Footer />
    </div>
  );
}

export default App;
