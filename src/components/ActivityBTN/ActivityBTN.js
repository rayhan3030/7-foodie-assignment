import React from 'react';
import './ActivityBTN.css'

const ActivityBTN = (props) => {
    // console.log(props)
    return (
        <div className='food'>

            <div><button onClick={() => props.weightBtnClicked(props.btn)} className='food-ozon'>{props.btn.time}</button></div>

        </div>
    );
};

export default ActivityBTN;