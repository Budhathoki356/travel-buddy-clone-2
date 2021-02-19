import React from 'react';
import './sass/main.scss'
import Header from './components/Header'
import Advice from './components/Advice';
import Feature from './components/Feature';
import Favourite from './components/Favourite';
import Card from './components/Card';
import Inspiration from './components/Inspiration';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Advice />
      <Feature />
      <Favourite />
      <Card />
      <Inspiration />
      <Article />
      <Footer />
    </div>
  );
}

export default App;