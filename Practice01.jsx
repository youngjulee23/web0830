import React, { useState } from 'react';

const Practice01 = (props) => {
    const [number, setNumber] = useState(0);
    function upCount(){
        setNumber(number +1);
        props.onCount();
    }

    return (
        <div>
            <div className='countDiv'>
                <h1>{number}</h1>
                <button className='countBtn' onClick={upCount}>클릭</button>
            </div>
        </div>
    );
};

export default Practice01;