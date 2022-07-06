import React from 'react';


const Space = (props) => {
     return (
        <div style={{ width: props.width ? props.width : '0', height: props.height? props.height : '0'}}/>
     );
};

export default Space;