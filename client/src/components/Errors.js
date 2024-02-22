// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Errors = () => {
//   const [errorValue, setErrorValue] = useState(0);
//   const [inputValue , setInputValue] = useState(0);
//   const [touchInput, setTouchInput] = useState(false);


//   const handleChangeSlider = (e) => {
//     setErrorValue(parseFloat(e.target.value));
//     if (!touchInput) {
//       setInputValue(parseFloat(e.target.value)); 
//       handleExchangeError(e.target.value)
//     }
//   };
  
//   const handleExchangeError = async (n) => {
//     const resp =  await axios.post('http://localhost:3030/updateErrors',{ n });
//   }

//   const handleChangeInput = (e) => {
//     if (e.target.value < 1001) {
//       setInputValue(e.target.value);
//       setErrorValue(parseFloat(e.target.value / 100));
//       setTouchInput(true);
//     }
//   };

//   return (
//     <div className="d-flex flex-row align-items-center">
//       <label htmlFor="errorSlider" style={{marginRight: '10px'}}>Errors:</label>
//       <input
//       type="range"
//       value={errorValue}
//       onChange={handleChangeSlider}
//       step={0.5}
//       min={0}
//       max={10}
//       style={{marginRight: '10px'}}
//       ></input>
//       <input 
//       type="number"
//       value={inputValue}
//       min={0}
//       max={1000}
//       onChange={handleChangeInput}
//       style={{height: '30px', marginRight: '50px'}}
//       ></input>
//     </div>
//   )
// }

// export default Errors;