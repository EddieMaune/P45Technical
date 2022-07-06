import '../css/Date.css';

function Date(props) {

    const onChange = (e) => {
        const date = e.target.value;

        props.updateDate(date);
    }

    return (
        <div className='date-container'>
            { props.label &&
                <label htmlFor='date' className='date-label'>{props.label}</label>
            }
            <input id='date' value={props.value} type="date" onChange={onChange}/>
        </div>
    )
}

export default Date;