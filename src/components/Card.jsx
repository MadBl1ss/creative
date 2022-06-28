import React from "react";

const Card = ({ author, title, article, date }) => {
  let day = date.slice(8, 10);
  let month = date.slice(5, 7);
  let year = date.slice(0, 4);
  switch (month) {
    case "01":
      month = "Января";
      break;
    case "02":
      month = "Февраля";
      break;
    case "03":
      month = "Марта";
      break;
    case "04":
      month = "Апреля";
      break;
    case "05":
      month = "Мая";
      break;
    case "06":
      month = "Июня";
      break;
    case "07":
      month = "Июля";
      break;
    case "08":
      month = "Августа";
      break;
    case "09":
      month = "Сентября";
      break;
    case "10":
      month = "Октября";
      break;
    case "11":
      month = "Ноября";
      break;
    case "12":
      month = "Декабря";
      break;
    default:
      break;
  }
  if (article.length >= 190) {
    article = article.slice(0, 190) + "...";
  }
  console.log(article.length);
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
