import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
// This is card component 

const Cards = (props) => {

    const { img, name, info, weight, time } = props.product;

    return (
        <div className='cards'>
            <img src={img} alt="" />
            <h3 className='food-name'>{name}</h3>
            <p className='food-info'><small>{info}</small></p>
            <p className='food-weight'>Food Weight: {weight} Kg</p>
            <p className='food-time'>Eating Within: {time} Min</p>
            <button onClick={() => props.eatingTimeHandle(props.product)} className='food-btn'>
                <p>Add to List</p>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cards;