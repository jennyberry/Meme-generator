import React from "react";
import memesData from "../memesData.js";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  function getMemeImage() {
    const memeArray = memesData.data.memes;
    const random = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <section>
      <div className="form">
        <div className="form-input-group">
          <input
            type="text"
            className="margin-right"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="margin-left"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="form-btn" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </section>
  );
}
