import React, { useState } from 'react';

const Checkbox = (props) => {
    // const {cap, shoose, bag} = props;
    const {list} = props;
    const [total, setTotal] = useState(0);
    function changeHandler(checkbox){
        // if(checkbox.checked){
        //     setTotal(total + parseInt(checkbox.value))
        // }else{
        //     setTotal(total - parseInt(checkbox.value))
        // }

        if(checkbox.checked) {
            setTotal((prevState)=> prevState + parseInt(checkbox.value))
        }else{
            setTotal((prevState)=> prevState - parseInt(checkbox.value))
        }
    }
    return (
        // <div>
        //     <input type='checkbox' value={cap} onChange={(e)=> {changeHandler(e.target)}}>모자 1만원</input>
        //     <input type='checkbox' value={shoose} onChange={(e)=> {changeHandler(e.target)}}>신발 3만원</input>
        //     <input type='checkbox' value={bag} onChange={(e)=> {changeHandler(e.target)}}>가방 8만원</input>
        //     <br/>
        //     <p>합계: {}</p>
        // </div>

        <div>
            {list.map((item) => (
                <label key={item.name}>
                    <input
                    type='checkbox'
                    value={item.price}
                    onChange={(e) => changeHandler(e.target)}
                    />
                    {item.name}
                </label>
            ))}
            <p>합계: {}</p>
        </div>
    );
};

export default Checkbox;