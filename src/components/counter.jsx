import { React, useState } from 'react';
export default function App() {
   const [counter, setcounter] = useState(0);

   const increase = () => {
      if (counter >= 0) {
         setcounter(count => count + 1);
      }
   }

   const decrease = () => {
      if (counter > 0)
         setcounter(count => count - 1);
   }

   const reset = () => {
      setcounter(0);
   }
   return (

      <div className="counter text-center">
         <h1>React Counter</h1>
         <span className="counter__output">{counter}</span>
         <div className="btn__container">
            <button className="control__btn" onClick={increase}>+</button>
            <button className="control__btn" onClick={decrease}>-</button>
            <button className="reset" onClick={reset}>Reset</button>
         </div>
      </div>
   )
}
