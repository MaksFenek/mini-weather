import React from 'react';
import Forecast from '../Forecast/Forecast';
import Navbar from '../Navbar/Navbar';
import './Main.scss';

function Main() {
  return (
    <section className='main'>
      <Navbar />
      <Forecast />
    </section>
  );
}

export default Main;
