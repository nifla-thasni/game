//  import Dice1 from ',,/assets/Dice1.png'
//  import Dice2 from ',,/assets/Dice2.png'
//  import Dice3 from ',,/assets/Dice3.png'
//  import Dice4 from ',,/assets/Dice4.png'
//  import Dice5 from ',,/assets/Dice5.png'

//  import React from 'react' 
//  import Dice6 from '../public/Dice6.png';
 import { rollTheDice,resetTheDice } from './Function';


export default function Section() {
  return (
    <div className=''>
<div className="container ">
      <h1>Let's Play</h1>
      <div className="dice">
        <p className="Player1">Player 1</p>
        <img className="img1" src='/Dice6.png'/>
        <p id="scr1">score1</p>
      </div>

      <div className="dice">
        <p className="Player2">Player 2</p>
        <img className="img2" src='/Dice6.png'/>
        <p id="scr2">score2</p>
      </div>
      <p id="result">let's start</p>

    </div>
    <div className="container bottom">
      <button id="myBtn" type="button" className="butn" onClick={rollTheDice}>
        Roll the Dice
      </button>
    </div>
    <div className="container bottom">
      <button type="button" className="butn" onClick={resetTheDice}>Reset</button>
    </div>  
  </div>
    )
}
