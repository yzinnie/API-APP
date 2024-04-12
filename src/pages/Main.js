import React from 'react';
import Header from '../components/Header';
import Weather from '../components/Weather';
import MapKakao from '../components/MapKakao';

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <h3>
        산책가기 전 <br />
        check하는 공간이다 멍!
      </h3>
      <Weather />
      <MapKakao />
    </div>
  );
};
export default Main;
