import Header from '../components/Header';
import { TypeAnimation } from 'react-type-animation';

const News = () => {
  return (
    <div>
      <Header />
      <div className="search-box">
        <p>
          <TypeAnimation
            sequence={['검색검색', 1000]}
            speed={13}
            wrapper="span"
            cursor={false}
          />
        </p>
        <img
          src={process.env.PUBLIC_URL + `assets/icon-search.svg`}
          alt="search-icon"
        />
      </div>
    </div>
  );
};

export default News;
