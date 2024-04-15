import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
  
}
function myGar(props) {
  return <h1>my myGarrage name is {props.name} ! </h1>
}
const myElement = <Car brand="Ford" />;
const myGarrage = <myGar name = "gar50" />;

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
root.render(myGarrage);
