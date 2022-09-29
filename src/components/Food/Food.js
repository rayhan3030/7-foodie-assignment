import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Cards from '../Cards/Cards';
import './Food.css'

const Food = () => {
    const [products, setProducts] = useState([]);
    const [activities, setActivities] = useState([]);
    // fetched data from customized json file and added customized data too
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const eatingTimeHandle = (product) => {
        // console.log(product);
        const newActivities = [...activities, product];
        setActivities(newActivities);
    }

    return (
        <div className='food-container'>
            <div className='left-container'>
                {
                    products.map(product => <Cards
                        key={product.id}
                        eatingTimeHandle={eatingTimeHandle}
                        product={product}
                    ></Cards>)
                }
            </div>
            <div className='right-container'>
                <Activities activities={activities}></Activities>
            </div>
        </div>
    );
};

export default Food;