import React from 'react'
import './styles/App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighLightSection from './components/HighLightSection';
import Testimonial from './components/Testimonial';
import About from "./components/About"
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HighLightSection/>
      <Testimonial />
      <About/>
      <Footer />
    </div>
  )
}