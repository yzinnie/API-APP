import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_KAKAOREST_API_KEY;

const NewsAPI = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dapi.kakao.com/v2/search/blog?query=반려동물&size=20`, {
        headers: {
          Authorization: `KakaoAK ${API_KEY}`,
        },
      })
      .then((data) => {
        setNews(data.data.documents);
        setLoading(false);
      })
      .catch((error) => console.log('error:', error));
  }, []);

  return (
    <div className="NewsAPI">
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <ul className="result-list">
          {news &&
            news.map((item) => (
              <li key={item.url}>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                <h4 dangerouslySetInnerHTML={{ __html: item.contents }}></h4>
                <a href={item.url}>자세히 읽기</a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default NewsAPI;
