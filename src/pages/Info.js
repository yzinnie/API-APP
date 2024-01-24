import Header from '../components/Header';
import { styled } from 'styled-components';

const ControlContainer = styled.div`
  top: 10px;
  width: 100%;
  height: 500px;
  background-color: #f4f5f7;
  border-radius: 10%;
`;

const Text = styled.h4`
  padding-top: 20px;
  padding-left: 15px;
  margin: 0;
`;

const Info = () => {
  return (
    <div>
      <Header />
      <ControlContainer>
        <div className="info-text">
          <Text>지구와 🌎 동물들이 🐬 모두 행복하길 바라는 마음을 담아 🤍</Text>
        </div>
      </ControlContainer>
    </div>
  );
};

export default Info;

/* InFo 
.Info {
  top: 10px;
  width: 100%;
  height: 500px;
  background-color: #f7f7f75c;
  border-radius: 10%;
}

.info-text {
  padding-top: 20px;
  padding-left: 15px;
}*/
