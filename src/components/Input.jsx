import '../css/Input.css';
import React from 'react';

function Input(props) {

    const onChange = (e) => {
        const text = e.target.value;

        props.onChange(text, props.stateCallBack);
    }

    return (
        <div className='input-container'>
            { props.label &&
                <label htmlFor={props.label} className={`label ${props.label === 'Email' && 'tangerine'}`}>
                    {props.label === 'Email' &&
                        <div className={'gold-ball'}>

                        </div>
                    }
                     {props.label}
                </label>
            }

            <div>
                <input 
                    id={props.label} 
                    className={`${props.label === 'Email' && 'gold-border'}`} 
                    type="text" 
                    value={props.value} 
                    placeholder={props.placeholder} 
                    onChange={onChange}
                />
                
                { props.label === 'Email' &&
                    <div className={`${props.label === 'Email' && 'error-text'}`} > </div>
                }
            </div>
        </div>
    )
}

export default Input;