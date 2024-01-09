const Header = () => {
  return (
    <div className="Header">
      <img
        className="header-img"
        src={process.env.PUBLIC_URL + `assets/logo-header.svg`}
      />
    </div>
  );
};
export default Header;
