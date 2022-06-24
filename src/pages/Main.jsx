import React from "react";
import SwiperInfo from "../components/SwiperInfo";
import Card from "../components/Card";
import Loader from "../components/Loader";
import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
  const [articles, setArticles] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc")
      .then((res) => {
        setArticles(res?.data?.articles);
        console.log(res?.data?.articles);
      });
  }, []);

  return (
    <>
      <SwiperInfo />
      <div className="main__container">
        {articles.map((article, index) => (
          <Card
            key={index}
            title={article?.title}
            article={article?.content}
            author={article?.author}
            date={article?.publishedAt}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
