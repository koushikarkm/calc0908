import React, {useState} from 'react'

const Proj = () => {
    const[input, setInput]=useState('');        
    const[result, setResult]=useState('');

    const handleButtonClick = (value) =>{
      if(value=== "="){
          setResult(eval(input).toString());
      }
      else if(value==='C'){  
        setInput('');                                                
        setResult('');
      }
      else{
        setInput((prevInput)=>prevInput + value);   
      }
    }
    
    return(
      <div className='calculator'>
        <div className='display'>
            
           <input type="text" value={input} readOnly />
        </div>

        <div className='buttons'>
          <button onClick={()=>handleButtonClick('7')}>7</button>
          <button onClick={()=>handleButtonClick('8')}>8</button>
          <button onClick={()=>handleButtonClick('9')}>9</button>
          <button onClick={()=>handleButtonClick('/')}>/</button>

          <button onClick={()=>handleButtonClick('4')}>4</button>
          <button onClick={()=>handleButtonClick('5')}>5</button>
          <button onClick={()=>handleButtonClick('6')}>6</button>
          <button onClick={()=>handleButtonClick('*')}>*</button>

          <button onClick={()=>handleButtonClick('1')}>1</button>
          <button onClick={()=>handleButtonClick('2')}>2</button>
          <button onClick={()=>handleButtonClick('3')}>3</button>
          <button onClick={()=>handleButtonClick('-')}>-</button>

          <button onClick={()=>handleButtonClick('0')}>0</button>
          <button onClick={()=>handleButtonClick('.')}>.</button>
          <button onClick={()=>handleButtonClick('=')}>=</button>
          <button onClick={()=>handleButtonClick('+')}>+</button>


          <button onClick={()=>handleButtonClick('C')} className='clear'>C</button>                
        </div>

        <div>
          <h3>Result</h3>
          <input type="text" value={result} readOnly />
        </div>
      </div>
    )
}

export default Proj
