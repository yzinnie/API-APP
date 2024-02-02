import Header from '../components/Header';
import { TypeAnimation } from 'react-type-animation';
import NewsAPI from '../components/NewsAPI';

const News = () => {
  return (
    <div>
      <Header />
      <div className="search-box">
        <p>
          <TypeAnimation
            sequence={['반려동물을 검색했어요', 1000]}
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
      <NewsAPI />
    </div>
  );
};

export default News;
