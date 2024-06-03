import React from "react";

const BlogCard = () => {
  return (
    <div className="card card-compact w-96 bg-blue-400 shadow-2xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <small className="card-title">date!</small>
        <h2 className="card-title">Question!</h2>
        <p>QuestionAnswer</p>
      </div>
    </div>
  );
};

export default BlogCard;
