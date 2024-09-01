import React, { useState } from 'react';
import './App.css';
import Checkbox from './Checkbox';
import Submit from './Submit';
import ImageComponent from './components/ImageComponent';
import Practice01 from './Practice01';



function App() {
    // const [value, setValue] = useState('안녕하세요');
    // const [font, setFont] = useState('50px');

    // function changeFont(size) {
    //     setFont(size)
    // }
    // const fontStyle = {
    //   fontSize: font
    // }

    // const [color, setColor] = useState('black')

    // const fontStyle = {
    //   color: color
    // }

    // const [form, setForm] = useState ({username: '', message: ''});
    // function onChangeHandler(e){
    //   const newForm = {...form, [e.target.name]: e.target.value};
    //   setForm(newForm)
    // }

    // const [message, setMessage] = useState({title: '제목', color: 'black'})
    // function changeMessage(msg) {
    //   // msg=e.target.value
    //   // console.log(msg)
    //   const newMessage = {...message}
    //   newMessage.title=msg
    //   newMessage.color='red'
    //   setMessage(newMessage)
    // }
    // function showMessage() {
    //   alert(message.title)
    // }

    // const productList = [
    //   {
    //     name:'모자',
    //     price: 10000
    //   }, 
    //   {
    //     name: '신발',
    //     price: 30000
    //   }, 
    //   {
    //     name: '가방',
    //     price: 80000
    //   }]

    // const regionList = [
    //   {
    //     region: "서울",
    //     eng: "Seoul"
    //   },
    //   {
    //     region: "부산",
    //     eng: "Busan"
    //   },
    //   {
    //     region: "제주",
    //     eng: "Jeju"
    //   },
    // ]

    const [count, setCount] = useState(0);
    function onCountHandler() {
      setCount((prev) => prev +1)
    }

  return (
    // <>
    //  <div style={fontStyle}>{value}</div>
    //  {/* 이벤트가 할일이 많으면 */}
    //  {/* <button onClick={()=>{changeFont('100px')}}>클릭</button> */} 
    //  <button onClick={()=>{setFont('100px')}}>클릭</button>
    // </>
   
    // <>
    // <div style={fontStyle}><h1>글자색 바꾸기</h1></div>
    // <button onClick={()=> {setColor('red')}}>빨간색</button>
    // <button onClick={()=> {setColor('green')}}>초록색</button>
    // <button onClick={()=> {setColor('blue')}}>파란색</button>
    // </>

    // <>
    // <h1>사용자 이름: {form.username}</h1>
    // <h1>내용: {form.message}</h1>
    // <input type='text' name='username' onChange={onChangeHandler}></input>
    // <input type='text' name='message' onChange={onChangeHandler}></input>
    // </>

    // <>
    // <h1 style={{color: message.color}}>{message.title}</h1>
    // <hr/>
    // <input type='text' onChange={(e)=> {changeMessage(e.target.value)}}></input>
    // <button onClick={showMessage}>클릭</button>
    // </>

    // <>
    // <Checkbox cap={10000} shoose={30000} bag={80000}/>
    // </>

    // <>
    // <Checkbox list={productList}/>
    // </>
    
    // <>
    // <Submit region={regionList}/>
    // </>

    // <>
    // <Submit/>
    // </>

    // <>
    // <ImageComponent/>
    // </>

    <>
    <div className='title'>
      <h1>Total Count: {count}</h1>
    </div>
    <div className='container'>
      <Practice01 onCount={onCountHandler}/>
      <Practice01 onCount={onCountHandler}/>
    </div>
    </>
  );
}

export default App;
