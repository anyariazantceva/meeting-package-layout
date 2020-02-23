import React, {Component} from 'react';
import './Form.css';

export default class Form extends Component {
    render() {
        return (
            <div className="main__left">
                <form className="form main__form">
                    <div className="form__group">
                        <label className="form__label">First Name</label>
                        <input type="text" placeholder='First Name' className="form__control" required/>
                    </div>
                    <div className="form__group">
                        <label className="form__label">Last Name</label>
                        <input type="text" placeholder='Last Name' className="form__control" required/>
                    </div>
                    <div className="form__group">
                        <label className="form__label">Email</label>
                        <input type="text" placeholder='Email' className="form__control" required/>
                    </div>
                    <div className="form__group">
                        <label className="form__label">Phone</label>
                        <input type="text" placeholder='Phone' className="form__control" required/>
                    </div>
                    <div className="form__group">
                        <label className="form__label">Company</label>
                        <input type="text" placeholder='Company' className="form__control" required/>
                    </div>
                    <div className="form__group">
                        <label className="form__label">Comments</label>
                        <textarea name="form-text" id="" cols="30" rows="10" className="form__textarea"></textarea>
                    </div>
                    <div className="form__group form__checkbox">
                        <label className='form__checkbox-label form__label'>Agree to terms</label>
                        <input type="checkbox" className='form__control form__checkbox-control'/>
                    </div>
                    <div className="form__group form__action">
                        <button className="form__btn">Continue</button>
                    </div>
                </form>
            </div>
        )
    }
}
