import React from 'react';
import Header from '../components/Header';
import Weather from '../components/Weather';
import MapKakao from '../components/MapKakao';

const Main = () => {
  return (
    <div>
      <Header />
      <Weather />
      <MapKakao />
    </div>
  );
};
export default Main;
