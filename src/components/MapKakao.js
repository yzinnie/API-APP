import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, { useEffect, useState } from 'react';

const MapKakao = () => {
  const startImage = {
    src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png',
    size: [50, 45],
    options: {
      offset: [15, 43],
    },
  };
  const startDragImage = {
    src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_drag.png',
    size: [50, 64],
    options: {
      offset: [15, 54],
    },
  };
  const endImage = {
    src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png',
    size: [50, 45],
    options: {
      offset: [15, 43],
    },
  };

  const endDragImage = {
    src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_drag.png',
    size: [50, 64],
    options: {
      offset: [15, 54],
    },
  };

  const [start, setStart] = useState(startImage);
  const [end, setEnd] = useState(endImage);

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
        errMsg: 'geolocation Error!',
        isLoading: false,
      }));
    }
  }, []);

  return (
    <div>
      <h3>오늘의 산책 코스</h3>
      <Map center={state.center} level={3} className="Map">
        {!state.isLoading && (
          <MapMarker
            position={state.center}
            image={start}
            draggable={true}
            onDragStart={() => setStart(startDragImage)}
            onDragEnd={() => setStart(startImage)}
          ></MapMarker>
        )}
        <MapMarker
          position={state.center}
          image={end}
          draggable={true}
          onDragStart={() => setEnd(endDragImage)}
          onDragEnd={() => setEnd(endImage)}
        ></MapMarker>
      </Map>
    </div>
  );
};

export default MapKakao;
