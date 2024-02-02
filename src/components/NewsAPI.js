import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const NewsAPI = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=${API_KEY}&q=반려동물`
      )
      .then((data) => {
        setNews(data.data.articles);
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
                <h4 dangerouslySetInnerHTML={{ __html: item.description }}></h4>
                <a href={item.url}>기사 자세히 읽기</a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default NewsAPI;
