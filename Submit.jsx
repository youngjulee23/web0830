import React, { useState } from 'react';

const Submit = (props) => {
    
    // function submitHandler(e) {
    //     e.preventDefault();
    //     console.log("submit 이벤트 발생")
    // }
    
    // const [form, setForm] = useState('');
    // function changeHandler(e) {
    //     setForm(e.target.value)
    // }
    // function submitHandler(e) {
    //     e.preventDefault();
    //     console.log('submit으로부터 받는 데이터:', form)
    // }

    // const{region} = props;
    // const [form, setForm] = useState('');
    // function updateValue(e){
    //     setForm(e.target.value)
    // }
    // function submitHandler(e){
    //     e.preventDefault();
    //     alert(form);
    // }

    // const [text, setText] = useState('');
    // function submitHandler(e){
    //     e.preventDefault();
    //     console.log('submit으로부터 받은 데이터: ', text)
    // }
    // function changeHandler(e){
    //     setText(e.target.value)
    // }

    // const [select, setSelect] = useState('coconut');
    // function selectHandler(e){
    //     setSelect(e.target.value)
    // }
    // function submitHandler(e){
    //     e.preventDefault();
    //     console.log('submit으로부터 받은 데이터: ', select)
    // }

    return (
        // <div>
        //     <h1>Submit 이벤트</h1>
        //     <form onSubmit={submitHandler}>
        //         <input type='submit' value="확인"/>
        //     </form>
        // </div>

        // <div>
        //     <form onSubmit={submitHandler}>
        //         <h1>이름: {form}</h1>
        //         <input type='text' onChange={changeHandler}/>
        //         <input type='submit' value="전송"/>
        //     </form>
        // </div>

        // <div>
        //     <form onSubmit={submitHandler}>
        //         {region.map((item) => (
        //             <label>
        //                 <input 
        //                 type='radio' 
        //                 name='city' 
        //                 value={item.eng} 
        //                 onChange={updateValue}
        //                 />
        //                 {item.region}
        //             </label>
        //         ))}
        //         &nbsp; &nbsp;
        //         <input type='submit' value="확인"/>
        //     </form>
        // </div>

        // <div>
        //     <form onSubmit={submitHandler}>
        //         <h1>내용: {text}</h1>
        //         <textarea value={text} onChange={changeHandler}></textarea>
        //         <input type='submit' value="전송"/>
        //     </form>
        // </div>

        // <div>
        //     <select value={select} onChange={selectHandler}>
        //         <option value="grapefruit">Grapefruit</option>
        //         <option value="lime">Lime</option>
        //         <option value="coconut">Coconut</option>
        //         <option value="mango">Mango</option>
        //     </select>
        //     <input type='submit' value="전송" onSubmit={submitHandler}/>
        // </div>

        <div>
            
        </div>
    );
};

export default Submit;