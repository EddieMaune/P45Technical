import React, { useEffect, useState } from 'react';
import  '../css/Radio.css';
import '../Colors.css';
import '../Icons.css';
import '../Font.css';

function Radio(props) {

    const [radiosButtons, setRadiosButtons] = useState([]);

   

    useEffect(() => {

        const onSelect = (option) => {
    
            props.onSelect(option);
        }

        const generateRadioButtons = (radios) => {
            if (!radios) {
                return null;
            }
            
    
           return radios.map((radio, key) => {
                    let radioIcon = props.checkedradio && radio.label === props.checkedradio 
                        ? radio.noCheck
                        : radio.check ;
                        
                        
                    let radioColor = props.checkedradio && radio.label === props.checkedradio 
                        ? 'bg-grey' 
                        : 'bg-pale-grey';     
    
                   return ( <div key={key} className='radio' onClick={()=> onSelect(radio.label)}>
                        <div  className={`radio-icon ${radioColor}`}>
                            <div className={`${radioIcon}`}/>
                        </div>
                        <div style={{fontSize: '0.7rem', color: '#B1BFCD', padding: '0 1vw 0 1vw'}}>
                            {radio.label}
                        </div>
                        </div>
                   )
                }
           );
        }

        setRadiosButtons(generateRadioButtons(props.radios));
    }, [ props]);

    return (
        <div className='container'>
            { props.label &&
                <div className={'radio-label'}>{props.label}</div>
            }
            <div className='radio-container'>
                {radiosButtons}
            </div>
        </div>
    )
}

export default Radio;