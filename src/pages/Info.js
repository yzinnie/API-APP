import Header from '../components/Header';

const Info = () => {
  return (
    <div>
      <Header />
      <div className="Info">
        <h2>
          산책 만족도를 위해
          <br /> 항상 체크하는 것들을 <br />한 번에 해결할 수 있도록
        </h2>
        <img src={process.env.PUBLIC_URL + `assets/icon-dog.png`} />
      </div>

      <div className="info-text">
        <h3>check!</h3>
        <p>
          지금의 날씨와 미세먼지 <br /> 오늘의 산책 장소 <br />
          오늘의 산-쳌 리스트 <br />
          항상 관심 가져야 할 반려견의 기사들
        </p>
      </div>
    </div>
  );
};

export default Info;
