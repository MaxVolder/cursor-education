import React from 'react';
import Post from './post/post';
import './post/post.css'; 
// Імпортуйте стилі

const DEADPOOL_IMAGE = "https://wallpapers.com/images/featured-full/deadpool-tzhfez1w8ud2z8aw.jpg";
const RAYAN_IMAGE = "https://media.cnn.com/api/v1/images/stellar/prod/150603102609-green-lantern-ryan-reynolds.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp";

const App = () => {
  return (
    <div className="app">
      <Post
        author={{
          name: "Wade Wilson",
          photo: DEADPOOL_IMAGE,
          nickname: "@deadpool"
        }}
        content="I'll come back and kill you Rayan, if you do that again.. Cheers Canada!"
        image={RAYAN_IMAGE}
        date={Date()}
      />
    </div>
  );
}

export default App;
