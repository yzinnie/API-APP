import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <img
        className="home-img"
        src={process.env.PUBLIC_URL + `assets/logo.svg`}
      />
      <button className="home-button" onClick={() => navigate('/main')}>
        ⁕ weather ⁕
      </button>
    </div>
  );
};
export default Home;
