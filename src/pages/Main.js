import React from 'react';
import Header from '../components/Header';
import Weather from '../components/Weather';
import MapKakao from '../components/MapKakao';
import NewHeader from '../components/NewHeader';
import Search from '../components/Search';

const Main = () => {
  return (
    <div>
      <Header />
      <NewHeader />
      <Weather />
      <MapKakao />
      <Search />
    </div>
  );
};
export default Main;
