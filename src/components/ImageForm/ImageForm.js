import React from "react";
import './ImageForm.scss';

function textInput() {
  return (
    <form className="img-form">
        <div className="img-form__inner">
            <input type="text" className="img-form__elements img-form__input" placeholder="Please enter text"/>
            <input type="text" className="img-form__elements img-form__input" placeholder="Please enter text"/>
            <button type="submit" className="img-form__elements img-form__submit">Submit</button>
        </div>
    </form>  
  )
}

export default textInput;