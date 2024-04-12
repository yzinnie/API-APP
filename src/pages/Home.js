import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <img
        className="home-img"
        src={process.env.PUBLIC_URL + `assets/logo.png`}
        alt="logo"
      />
      <button className="home-button" onClick={() => navigate('/main')}>
        산쳌 하러 가자 !
      </button>
    </div>
  );
};
export default Home;
