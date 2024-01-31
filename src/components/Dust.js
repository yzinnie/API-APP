import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const KAKAO_API_KEY = process.env.REACT_APP_KAKAOREST_API_KEY;

const Dust = () => {
  const [position, setPosition] = useState({});
  const [dust, setDust] = useState({});

  useEffect(() => {
    new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((currentPosition) => {
        setPosition({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
        });
        resolve(currentPosition.coords);
      });
    }).then((coords) => {
      /* API 요청 시작 */
      fetch(
        `https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${coords.longitude}&y=${coords.latitude}&input_coord=WGS84&output_coord=TM`,
        {
          headers: {
            Authorization: `KakaoAK ${KAKAO_API_KEY}`,
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          const coord = json.documents[0];
          fetch(
            `http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${Number(
              coord.x
            )}&tmY=${Number(coord.y)}&returnType=json&serviceKey=${API_KEY}`
          )
            .then((res) => res.json())
            .then((json) => {
              const station = json.response.body.items[0].stationName;
              fetch(
                `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=${API_KEY}&returnType=json&numOfRows=100&pageNo=1&stationName=${station}&dataTerm=DAILY&ver=1.0`
              )
                .then((res) => res.json())
                .then((json) => {
                  const grade = json.response.body.items[0].pm10Grade;
                  setDust(grade);
                });
            });
        });
    });
  }, []);

  const dustGrade = () => {
    if (dust === '1') {
      return '좋음';
    } else if (dust === '2') {
      return '보통';
    } else if (dust === '3') {
      return '나쁨';
    } else if (dust === '4') {
      return '매우나쁨';
    } else if (dust === null) {
      return '정보없음';
    } else {
      return 'Loading...';
    }
  };
  return <div className="Dust">{<div>미세먼지 {`${dustGrade()}`} </div>}</div>;
};

export default Dust;
