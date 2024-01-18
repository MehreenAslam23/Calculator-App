import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[value,setvalue] = useState('')
  return (
    <div className=" main-div">
      <div className='calculator-div'>
        <input type='text' value={value}  placeholder='Start Calculation...' className='text-div'></input>
        <div className='button-div'>
          <input type='button' value='AC' onClick={(e)=>setvalue(value.slice(0,-1))}></input>
          <input type='button' value='DE' onClick={(e)=>setvalue('')}></input>
          <input type='button' value='%' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input className='btn-color' type='button' value='/' onClick={(e)=>setvalue(value+e.target.value)}></input>
        </div>
        <div className='button-div'>
          <input type='button' value='7' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input type='button' value='8' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input type='button' value='9' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input className='btn-color' type='button' value='*' onClick={(e)=>setvalue(value+e.target.value)}></input>
        </div>
        <div className='button-div'>
          <input type='button' value='4' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input type='button' value='5' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input type='button' value='6' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input className='btn-color' type='button' value='+' onClick={(e)=>setvalue(value+e.target.value)}></input>
        </div>
        <div className='button-div'>
          <input type='button' value='1' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input type='button' value='2' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input type='button' value='3' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input className='btn-color' type='button' value='-' onClick={(e)=>setvalue(value+e.target.value)}></input>
        </div>
        <div className='button-div'>
          <input className='zero-btn' type='button' value='0' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input type='button' value='.' onClick={(e)=>setvalue(value+e.target.value)}></input>
          <input className='btn-color'  type='button' value='=' onClick={(e)=>{setvalue(eval(value))}}></input>
        </div>
      </div>
    
    </div>
  );
}

export default App;
