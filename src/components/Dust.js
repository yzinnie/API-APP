import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL =
  'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?';

const Dust = () => {
  const [dust, setDust] = useState({});

  useEffect(() => {
    fetch(
      `${BASE_URL}sidoName=서울&pageNo=1&numOfRows=100&returnType=json&serviceKey=${API_KEY}&ver=1.3`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDust(data.response.body.items[0]);
      })
      .catch((error) => console.log('error:', error));
  }, []);

  const dustGrade = () => {
    if (`${dust.pm10Grade}` === '1') {
      return '좋음';
    } else if (`${dust.pm10Grade}` === '2') {
      return '보통';
    } else if (`${dust.pm10Grade}` === '3') {
      return '나쁨';
    } else if (`${dust.pm10Grade}` === '4') {
      return '매우나쁨';
    } else {
      return 'Loading...';
    }
  };

  return (
    <div className="Dust">
      <div>미세먼지 {`${dustGrade()}`} </div>
    </div>
  );
};

export default Dust;
