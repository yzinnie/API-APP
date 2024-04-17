import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Weather from '../components/Weather';
import MapKakao from '../components/MapKakao';
import Home from './Home';

const Main = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="Main">
      {show && <Home />}
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
