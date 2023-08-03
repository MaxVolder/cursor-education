import React from 'react';

const Post = ({ author, content, image, date }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={author.photo} alt={author.name} className="author-photo" />
        <div className="author-details">
          <h3>{author.name}</h3>
          <span className="nickname">{author.nickname}</span>
        </div>
      </div>
      <p className="post-content">{content}</p>
      {image && <img src={image} alt="Post" className="post-image" />}
      <span className="post-date">{date}</span>
    </div>
  );
};

export default Post;
