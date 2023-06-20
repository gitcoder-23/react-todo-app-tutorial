import React, {useState} from 'react'



const TestLoop = () => {

  const [textInput, setTextInput] = useState('');
  const [textValue, setTextValue] = useState([]);
  const [errorText, setErrorText] = useState();

  const OnInput = (ev) => {
    setTextInput(ev.target.value);
  };
  
  const inputSubmit = (ev) => {
    ev.preventDefault();
    if(!textInput || textInput === ''){
      setErrorText('Put a valid input !');
      setTimeout(() => {
        setErrorText('');
      }, 5000);
    }else{
      setTextValue([...textValue, textInput]);
      setTextInput('');
    }
  }


  return (
    <div style={{backgroundColor : 'yellowgreen'}}>
      <div style={{backgroundColor : 'yellow'}}><h1>Small Tutorials</h1>
      <div>
        <form onSubmit={inputSubmit}>
          <input style={{backgroundColor : 'azure', borderRadius : 10, color : 'green'}}
            type='text' value= {textValue} placeholder='Enter Text' onChange={OnInput}/>&nbsp;&nbsp;&nbsp;
              <button type='submit' style={{backgroundColor : 'azure', borderRadius : 10, color : 'green'}}>
                 Add 
              </button>
        </form>
        <div><span style={{color: 'red'}}>{errorText}</span></div>
      </div>
      </div>
    </div>
  )
}

export default TestLoop
