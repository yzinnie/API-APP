import React from 'react';
import Header from '../components/Header';
import Weather from '../components/Weather';
import Map_kakao from '../components/Map_kakao';

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Weather />
      <Map_kakao />
    </div>
  );
};
export default Main;
