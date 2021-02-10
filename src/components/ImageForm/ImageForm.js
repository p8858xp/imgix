import React from "react";
import './ImageForm.scss';
import butterfly from "../../images/butterfly.jpg";

function textInput() {
  return (
    <form className="img-form">
        <div className="img-form__inner">
            <img className="img-form__elements img-form__image" src={butterfly} />
            <input type="text" className="img-form__elements img-form__text" placeholder="Please enter text"/>
            <div className="img-form__blend">
              <label for="color">Select your blend color: </label>
              <input className="blend-input" type="color" name="color" value="#ff0000"/>
            </div>
            <button type="submit" className="img-form__elements img-form__submit">Submit</button>
        </div>
    </form>  
  )
}

export default textInput;