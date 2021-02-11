import React, { useState } from "react";
import './ImageForm.scss';
import ImageDropdown from "../ImageDropdown/ImageDropdown";

const ImageForm = () => {
  const [imgUrl, setImgUrl] = useState("https://assets.imgix.net/examples/butterfly.jpg");
  const [assetUrl, setAssetUrl] = useState("https://assets.imgix.net/examples/butterfly.jpg")
  const [text, setText] = useState("");
  const [color, setColor] = useState("#4400bb");
  const [error, setError] = useState(false);

  const renderImage = (e) => {
    e.preventDefault();
    setImgUrl(`${assetUrl}?txt=${text}&blend=${color.slice(1)}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`);
    setText("");
  };

  const handleText = (e) => {
    const imgStr = e.target.value;
    if (imgStr.includes("#") || imgStr.includes("&")){
      setError(true);
    }
    else{
      setText(imgStr);
      setError(false);
    }
  };

  const handleDropdown = (e) => {
    const currentImg = e.target.value;
    let url;
    switch(currentImg) {
      case "butterfly":
        url = "https://assets.imgix.net/examples/butterfly.jpg";
        break;
      case "bridge":
        url = "https://assets.imgix.net/unsplash/bridge.jpg";
        break;
      case "pineneedles":
        url = "https://assets.imgix.net/unsplash/pineneedles.jpg";
        break;
      case "motorbike":
        url = "https://assets.imgix.net/unsplash/motorbike.jpg";
        break;
      case "mountains":
        url = "https://assets.imgix.net/unsplash/mountains.jpg";
        break;
    }
    setAssetUrl(url);
    setImgUrl(url);
  };

  return (
    <form className="img-form" onSubmit={renderImage}>
        <div className="img-form__inner">
            <div className="img-form__image-container">
              <img className="img-form__elements img-form__image" src={imgUrl} />
            </div>
            <label className="img-form__ddl" for="cars">Choose an image:</label>
            <ImageDropdown handleDropdown={handleDropdown}/>
            <input type="text" className="img-form__elements img-form__text" placeholder="Please enter text to insert..." value={text} onChange={handleText}/>
            <div style={{display: error ? "block" : "none"}} className="error">You cannot include those symbols in the text! Try again.</div>
            <div className="img-form__blend">
              <label for="favcolor">Select your blend color: </label>
              <input className="blend-input" id="favcolor" type="color" name="favcolor" value={color} onChange={(e) => setColor(e.target.value)}/>
            </div>
            <button className="img-form__elements img-form__submit">Submit</button>
        </div>
    </form>  
  )
}

export default ImageForm;