import React from 'react';
import './App.css';
import Field from './Field.js';


function App() {

  const [state, setState] = React.useState([])                                  //  Creating a state to store input Array from user.
  
  const fields = [];
  for (let i = 0; i < state.length; i++) {                                      //  A for loop to push JSX elements into another array
    fields.push(<Field id={i+1} number={state[i]} length={state.length}/>);     //  which will be rendered.
  } 

  const onSubmit = (e) => {                                                     //  Submit function for submitting.
    e.preventDefault();
    setState(e.target.inputField.value.split(','))
  }
  
  return (
    <>
      <div className='main'>
        <h1>Binary Tree Representation by Abhishek Kumar</h1>
        <br/>
        <h4>Enter the values for the tree in the form of <u>comma seperated</u> array values:</h4>
      </div>
      <div className='main' >

      <form onSubmit={onSubmit}>
        <input type="text" name="inputField" />&nbsp;&nbsp;&nbsp;
        <button type="submit">Submit</button>
      </form>
      <br/><br/>

      {fields}                                                                    
          
      </div>
      <div>
        <p>
          <ol><h4><u>NOTE:</u></h4> I have used very simple bare bones setup for this, there is just one useState and use of array manipulation. 
          </ol>
          <ol>I have not done any complex stuff like creating opjects to store left and right child etc cuz it was not specifically mentioned in instructions.
          </ol>
          <ol>Also I am not familier with D3 library so couldn't use it and there is no way of creating lines between elements without external library
          one other option was React-Connect-Elements library.
          </ol>
        </p>
      </div>
    </>
  );
}

export default App;
