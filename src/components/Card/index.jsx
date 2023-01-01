import React from "react";
import './style.css'

const Card = ({ imageUrl, title, description, date, children }) => {
  return (
    <article className="news-block card border-0">
      <div className="news-body p-0 border p-2">
        <div className="mb-4">
          <img className="img-fluid w-100 rounded card-img" src={imageUrl} alt />
        </div>
        <small className="d-block mb-1">{date}</small>
        <h2 className="h4 mb-1">
          <a href="single-article.html">{title}</a>
        </h2>
        <p className="desc">{description}</p>
      </div>
      {children}
    </article>
  );
};

export default Card;
