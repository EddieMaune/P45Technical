import React from 'react';
import Space from './Space';
import '../css/Submit.css'
import '../Colors.css';

const Submit = (props) => {
    return (
        <div className='submit-container'>
            <button className={'cancel-button bg-grey'} onClick={props.clearForm}>
                CANCEL
            </button>

            <Space width={'1vw'}/>

            <button className={'save-button bg-blue-green white'} onClick={props.echoForm}>
                SAVE
            </button>
        </div>
    );
}

export default Submit