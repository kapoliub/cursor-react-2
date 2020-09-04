import React from 'react';
import './contacts.css';


const Contact = (props) =>{
    return (
        <div className="Contact">
            <div className='name-gender-field'>
                <div className='name'>{props.firstName} <b>{props.lastName}</b></div>
                <div className='gender'><img src={props.gender} alt='gender_icon'/></div>
            </div>
            <div className='phone'>{props.phone}</div>
        </div>
    );
}

export default Contact;
