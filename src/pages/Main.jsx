import React from "react";
import SwiperInfo from "../components/SwiperInfo";
import Card from "../components/Card";
// import Loader from "../components/Loader";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
// import _ from "lodash.sortby";

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [author, setAuthor] = useState("");
  const [dateMin, setDateMin] = useState("");
  const [dateMax, setDateMax] = useState("");

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc")
      .then((res) => {
        setArticles(res?.data?.articles);
      });
  }, []);

  const authors = useMemo(
    () => [
      ...new Set(
        articles.map((n) => (n.author === null ? "NoName" : n.author))
      ),
    ],
    [articles]
  );
  const filteredArticles = useMemo(
    () =>
      [
        [author, (n) => n.author === author],
        [dateMin, (n) => n.publishedAt >= dateMin],
        [dateMax, (n) => n.publishedAt <= dateMax],
      ].reduce((acc, n) => (n[0] ? acc.filter(n[1]) : acc), articles),
    [articles, author, dateMin, dateMax]
  );
  // (e) => setAuthor(e.target.value);
  return (
    <>
      <SwiperInfo />
      <main className="main">
        <div className="filters__container">
          <div className="filters__container-author">
            <svg
              className={author !== "" ? "hide" : ""}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66665C5.78259 12.5 4.93474 12.8512 4.30962 13.4763C3.6845 14.1014 3.33331 14.9493 3.33331 15.8333V17.5"
                stroke="#888888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 9.16667C11.841 9.16667 13.3334 7.67428 13.3334 5.83333C13.3334 3.99238 11.841 2.5 10 2.5C8.15907 2.5 6.66669 3.99238 6.66669 5.83333C6.66669 7.67428 8.15907 9.16667 10 9.16667Z"
                stroke="#888888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={author !== "" ? "hide" : ""}>Выбор автора</span>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option></option>
              {authors.map((n, i) => (
                <option key={i}>{n}</option>
              ))}
            </select>
          </div>
          <div className="filters__container-date">
            <div className="date__first">
              <input
                className="first"
                type="date"
                value={dateMin}
                onChange={(e) => setDateMin(e.target.value)}
              />
            </div>
            <div className="date__second">
              <input
                className="second"
                type="date"
                value={dateMax}
                onChange={(e) => setDateMax(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="cards__container">
          {filteredArticles.map((elem, index) => (
            <Card
              key={index}
              title={elem?.title}
              article={elem?.content}
              author={elem?.author}
              date={elem?.publishedAt}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
