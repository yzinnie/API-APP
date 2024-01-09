import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <img
        className="home-img"
        src={process.env.PUBLIC_URL + `assets/logo-home.svg`}
      />
      <button className="home-button" onClick={() => navigate('/order')}>
        주문하러 가기
      </button>
    </div>
  );
};
export default Home;
