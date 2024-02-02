import Header from '../components/Header';
import { TypeAnimation } from 'react-type-animation';

const Info = () => {
  return (
    <div>
      <Header />
      <div className="Info">
        <div>
          <h3>
            산책 만족도를 위해 항상 체크하는 것들을 <br /> 한 번에 확인하는 공간
          </h3>
          <h3>
            <TypeAnimation
              sequence={['🤍🤍🤍🤍🤍🤍🤍']}
              speed={20}
              wrapper="span"
              cursor={false}
            />
          </h3>
          <h4>
            지금의 날씨와 미세먼지 <br /> 오늘의 산책 코스 <br /> 산책
            체크리스트 <br /> 항상 관심가져야 하는 반려동물의 뉴스
          </h4>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + `assets/icon-dog.gif`}
            alt="icon-dog"
          />
          <h3>산쳌의 개발자에게 원하는 것을 얘기해 주세요!</h3>
          <p> 우리와 함께 살아가는 모든 것들을 위해 노력할게요</p>
          <p>
            <a href="mailto: yyjh222@gmail.com">이메일 보내기｡.:*☆</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
