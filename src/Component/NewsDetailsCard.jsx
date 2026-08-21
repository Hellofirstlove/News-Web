import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-5 px-2 sm:px-0">
      <img
        className="w-full h-48 sm:h-87.5 object-cover rounded-md"
        src={news.image_url}
        alt={news.title}
      />
      <h2 className="text-xl sm:text-2xl font-semibold">{news.title}</h2>

      <p className="text-sm sm:text-base leading-7 text-gray-600">{news.details}</p>
      <Link className="btn btn-secondary btn-sm sm:btn-md" to={`/category/${news.category_id}`}>
        Back to Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;