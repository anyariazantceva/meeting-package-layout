import React, {Component} from "react";

export default class Main extends Component {
    render() {
        return (
            <div className='app-main main'>
                <div className="main__left">
                    <form className="form main__form">
                        <div className="form__group">
                            <label className="form__label"></label>
                            <input type="text" placeholder='First Name' className="form__control"/>
                        </div>
                        <div className="form__group">
                            <label className="form__label"></label>
                            <input type="text" placeholder='Last Name' className="form__control"/>
                        </div>
                        <div className="form__group">
                            <label className="form__label"></label>
                            <input type="text" placeholder='Email' className="form__control"/>
                        </div>
                        <div className="form__group">
                            <label className="form__label"></label>
                            <input type="text" placeholder='Phone' className="form__control"/>
                        </div>
                        <div className="form__group">
                            <label className="form__label"></label>
                            <input type="text" placeholder='Company' className="form__control"/>
                        </div>
                        <div className="form__group">
                            <textarea name="form-text" id="" cols="30" rows="10" className="form__textarea"></textarea>
                        </div>
                        <div className="form__group">
                            <label className='form__label'></label>
                            <input type="checkbox" className='form__control form__checkbox'/>
                        </div>
                    </form>
                </div>
                <div className="main__right booking">
                    <div className="booking__title">Title</div>
                    <div className="booking__title">Title</div>
                    <div className="booking__title">Title</div>
                    <div className="booking__title">Title</div>
                    <div className="booking__title">Title</div>
                    <div className="booking__title">Title</div>
                </div>
            </div>
        )
    }
}
