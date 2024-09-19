/* eslint-disable no-undef */
// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App(){
  const [formData,setFormData] = useState({
    name: '',
    age: '',
    email: ''
  })
  const onchangehandler = (event)=>{
    setFormData(()=>(
      {
        ...formData,
        [event.target.name] : event.target.value 
      }
    ))
  }
  const handelsubmit = (e) => {
      e.preventDefault();
      console.log(
        formData
      )
  }
  return(
    <form onSubmit={handelsubmit}>
      
      <input type='text' name='name'onChange={onchangehandler} placeholder='your name'></input>
      <br/>
      <br/>
      <input type='number' name='age' onChange={onchangehandler} placeholder='your age'></input>
      <br/>
      <br/>
      <input type='email' name='email' onChange={onchangehandler} placeholder='your email'></input>

      <br/>
      <br/>
      <button type='submit'>send</button>

    </form>
      // <>
      //       <h1>text</h1>
      //       <input onChange={onchangehandler} name='text'></input>
      // </>
  )

}

export default App;