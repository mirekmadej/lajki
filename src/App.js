import './App.css';
import { useState } from 'react';
import Plansza from './Plansza';
import gruszka from './img/gruszka.jpg';

let grafiki = [
  {id:1, grafika:gruszka, opis:"gruszka"},
  {id:2, grafika:gruszka, opis:"gruszka"}
];

function App() {
  return (
    <div className="App">
      <h1>lajki</h1>
      <Plansza k={grafiki[0]} />
      <Plansza k={grafiki[1]} />
      
    </div>
  );
}

export default App;
