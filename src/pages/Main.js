import React from 'react';
import Header from '../components/Header';
import Weather from '../components/Weather';
import MapKakao from '../components/MapKakao';
import NewHeader from '../components/NewHeader';
import CheckList from '../components/CheckList';

const Main = () => {
  return (
    <div>
      <Header />
      <NewHeader />
      <Weather />
      <MapKakao />
      <CheckList />
    </div>
  );
};
export default Main;
