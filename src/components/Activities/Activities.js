// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import ActivityBTN from '../ActivityBTN/ActivityBTN';
import Famount from '../Famount/Famount';
import Profile from '../Profile/Profile';
import './Activities.css'
const Activities = (props) => {


    const [weightBtn, setWeightBtn] = useState([]);
    const [part, setPart] = useState([]);

    useEffect(() => {
        fetch('btn.json')
            .then(res => res.json())
            .then(data => setWeightBtn(data))
    }, [])
    const weightBtnClicked = (weightBtn) => {
        // console.log(weightBtn);
        const newPart = [...part, weightBtn];
        setPart(newPart);
    }
    const { activities } = props;
    let total = 0;
    for (const activity of activities) {
        total = total + activity.time;
    }

    return (
        <div className='activities'>
            <Profile></Profile>
            <h2>Food Amount</h2>

            <div className='food-div'>
                {
                    weightBtn.map(btn => <ActivityBTN key={btn.id} btn={btn}
                        weightBtnClicked={weightBtnClicked} ></ActivityBTN>)
                }
            </div>

            <h3>Competition Theme</h3>
            <div>
                <p className='time'>Eating Time : {total} Min</p>
                <Famount part={part}></Famount>

                <button className='activity'>Activity Completed</button>
            </div>
        </div>
    );
};
export default Activities;