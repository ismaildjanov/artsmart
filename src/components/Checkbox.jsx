import React from 'react'
import "./Checkbox.scss";

const Checkbox = () => {
  return (
    <div className='checkbox__wrapper'>
        <div className="form__group">
            <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="small" name="size" />
                <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Show only products with a plan
                </label>
            </div>
        
            <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="large" name="size" />
                    <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Show only dillers with a plan
                </label>
            </div>
        </div>
    </div>
  )
}

export default Checkbox