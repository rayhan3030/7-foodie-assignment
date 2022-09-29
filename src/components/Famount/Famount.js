import React from 'react';

const Famount = (props) => {
    const { part } = props;

    let total = 0;
    for (const item of part) {
        total = total = item.weight;
    }

    return (
        <div>
            <p className='weight'>Food Weight : {total} Kg</p>
        </div>
    );
};

export default Famount;