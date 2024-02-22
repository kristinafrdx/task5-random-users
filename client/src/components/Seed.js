import axios from "axios";
import React, { useState } from "react";
import randomIcon from '../icons/renew.svg'

const Seed = () => {
const [seedValue, setSeedValue] = useState(0);

const handleSeedValue = async (e) => {
  try {
    const response = await axios.post('http://localhost:3030/seed', {
      seed: seedValue,
    })
  } catch {
    console.log(e)
  }
}
  return (
    <div className="d-flex align-items-center">
      <label style={{ marginRight: '10px' }}>Seed:</label>
      <input 
      type="number"
      value={seedValue}
      min={0}
      onChange={(e) => setSeedValue(e.target.value)}
      style={{ height: '30px' }}
      ></input>
      <button className="btn" onClick={handleSeedValue} style={{paddingRight: '0'}}>
        <img src={randomIcon} alt='random' style={{ maxWidth: '30px' }} />
      </button>
    </div>
  )
}

export default Seed;