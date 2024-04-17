const Home = () => {
  return (
    <div className="Home">
      <img
        className="home-img"
        src={process.env.PUBLIC_URL + `assets/logo.png`}
        alt="logo"
      />
      <p>산쳌 하러 가자 !</p>
    </div>
  );
};
export default Home;
