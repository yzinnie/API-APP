import React from 'react';
import Header from '../components/Header';
import Weather from '../components/Weather';
import MapKakao from '../components/MapKakao';
import NewHeader from '../components/NewHeader';
import News from './News';

const Main = () => {
  return (
    <div>
      <Header />
      <NewHeader />
      <Weather />
      <MapKakao />
      <News />
    </div>
  );
};
export default Main;
