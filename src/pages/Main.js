import React from 'react';
import Header from '../components/Header';
import Weather from '../components/Weather';
import MapKakao from '../components/MapKakao';
import Info from '../components/Info';

const Main = () => {
  return (
    <div>
      <Header />
      <Info />
      <Weather />
      <MapKakao />
    </div>
  );
};
export default Main;
