import { useEffect, useState } from 'react';

const API_KEY =
  'stYkwEbjTTjRtja2%2FbsDqZXuskJw2quXY5D4JqFQCdY1A4pFp%2BuEyXUbvfayA0PYFtsgqA4V8x6AO4y%2FFcKHqg%3D%3D';
const BASE_URL =
  'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?';

const Dust = () => {
  const [dust, setDust] = useState({});

  useEffect(() => {
    fetch(
      `${BASE_URL}sidoName=제주&pageNo=1&numOfRows=100&returnType=json&serviceKey=${API_KEY}&ver=1.3`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDust(data.response.body.items[0]);
      });
  }, []);

  const dustGrade = () => {
    if (`${dust.pm10Grade}` === '1') {
      return '좋음';
    } else if (`${dust.pm10Grade}` === '2') {
      return '보통';
    } else if (`${dust.pm10Grade}` === '3') {
      return '나쁨';
    } else {
      return '매우나쁨';
    }
  };

  return (
    <div className="Dust">
      <div>{`미세먼지 ${dustGrade()}`} </div>
    </div>
  );
};

export default Dust;
