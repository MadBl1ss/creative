import React from "react";

const Card = ({ author, title, article, date }) => {
  let day = date.slice(8, 10);
  let month = date.slice(5, 7);
  let year = date.slice(0, 4);

  return (
    <div className="card__wrapper">
      <span className="card__wrapper-date">
        {day} {month} {year}
      </span>
      <h2 className="card__wrapper-title">{title}</h2>
      <p className="card__wrapper-article">{article}</p>
      <span className="card__wrapper-author">{author}</span>
    </div>
  );
};

export default Card;
