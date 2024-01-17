import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <img
        src={process.env.PUBLIC_URL + `assets/icon-header.png`}
        onClick={() => navigate('/main')}
      />
      <img src={process.env.PUBLIC_URL + `assets/icon-menu.png`} />
    </div>
  );
};
export default Header;
