import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, { useEffect, useState } from 'react';

const MapKakao = () => {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  }, []);
  return (
    <div>
      <h4>오늘의 산책 코스</h4>
      <Map center={state.center} level={3} className="Map">
        {!state.isLoading && <MapMarker position={state.center}></MapMarker>}
      </Map>
    </div>
  );
};

export default MapKakao;
