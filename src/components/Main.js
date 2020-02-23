import React, {Component} from "react";
import './Main.css';
import Form from "./Form";
import Booking from './Booking';

export default class Main extends Component {
    render() {
        return (
            <div className='app-main'>
                <div className='main container'>
                    <Form />
                    <Booking/>
                </div>

            </div>
        )
    }
}
