import React from "react";
import memesData from "../memesData.js";

export default function Form() {
  const [getImage, setImage] = React.useState();
  function getMemeImage() {
    const memeArray = memesData.data.memes;
    const random = Math.floor(Math.random() * memeArray.length);
    setImage(memeArray[random].url);
  }

  return (
    <section>
      <div className="form">
        <div className="form-input-group">
          <input type="text" className="margin-right" placeholder="Top Text" />
          <input
            type="text"
            className="margin-left"
            placeholder="Bottom Text"
          />
        </div>
        <button className="form-btn" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <img src={getImage} className="meme-img" />
      </div>
    </section>
  );
}
