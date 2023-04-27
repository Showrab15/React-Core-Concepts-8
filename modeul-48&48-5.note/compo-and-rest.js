import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


// JSX: in this App component we will call our own component as JSX 
function App() {
  return (
    <div className="App">
      <District name="noyakhali" special="bivag"></District >
      <District name="sumilla" special="moyna and moti"></District >
      <District name="brammonbaria" special="maria"></District >
     
    </div>
  );
}

// this is javascript style object. it will set as style in in jsx tag .
const districtStyle = {
  backgroundColor: 'red',
  padding: '20px',
  margin: '20px',
  borderRadius: '20px'
}



// in the bellow we create a component named District . It pass a parameter named props , this props will send data in  JSX
function District(props){

  // in the bellow we use/declare useState for something will change . for this we will declare

  // const[name-of-state(we can called it variable which will use for show the value of useState), set(name-of-state)] = useState(inside first bracket we will declare initial value of our data).


  // for initial value:
  // if we do any addition we will set initial value  0.
  //if we do any multiplication we will set initial value 1.
  // if we show any array we will set  empty array as a initial value .

  const [power, setPower] = useState(1);


  // set event handler for power button . which will increase value of power by using in button as a onClick
  const boostPower = () =>{
const newPower = power * 2;
setPower(newPower)
  }
  return (
    <div style={districtStyle}>
       {/* in the h3 tag we set in-line style in react .  */}
      <h3 style={{color:"black"}} >Name: {props.name}</h3>
      <p>special:{props.special} </p>
      <h4>Power: {power}</h4>
      {/* in the bellow set onClick for button. if we click on the button it will work as boostPower event handler function */}
      <button onClick={boostPower} >Boost the power</button>
    </div> 
  )
}

export default App;
