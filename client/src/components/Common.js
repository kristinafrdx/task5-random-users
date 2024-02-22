import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import Seed from "./Seed.js";
import randomIcon from '../icons/renew.svg'
import seedrandom from 'seedrandom';

const length = 20;
const Common = () => {
  const [selectedRegion, setSelectedRegion] = useState('UK');
  const [allUsers, setAllUsers] = useState([]);
  const [errorValue, setErrorValue] = useState(0);
  const [inputValue , setInputValue] = useState(0);
  const [sterileData, setSterileData] = useState([]);
  const [seedValue, setSeedValue] = useState(Math.floor(Math.random() * 1000000));
  const [currentPage, setCurrentPage] = useState(1);
  const [lengthUsers, setLengthUsers] = useState(length);

  // // REGION
  const handleChangeRegion = async (e) => {
    const newRegion = e.target.value;
    setSelectedRegion(newRegion);
    // const resp = await axios.post('http://localhost:3030/region', { 'region': newRegion });
    // setAllUsers(resp.data);
    // setSterileData(resp.data);
    // getUsers();
  }
  //  useEffect(() => {
  //   getUsers()
  // }, []);

  // GET USERS
  // const getUsers = async () => {
  //   // console.log(selectedRegion, inputValue, seedValue)
  //   try {
  //     // const send = await axios.post('http://localhost:3030/users', { selectedRegion, inputValue, seedValue })
  //     const response = await axios.get(`http://localhost:3030/users`);
  //     const updateUsers = await handleExchangeError(response.data, errorValue);
  //     setAllUsers(previous => [...previous, ...updateUsers])
  //     setSterileData(previous => [...previous, ...response.data])
  //     // setAllUsers(send.data)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

 
 
  // SCROLL
  const handlerScroll = async (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setLengthUsers((prevLength) => prevLength + length)
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', handlerScroll)
    return () => {
      document.removeEventListener('scroll', handlerScroll)
    }
  });
  
//   // ERROR 
  const handleChangeSlider = async (e) => {
    setErrorValue(Number(e.target.value));
    setInputValue(Number(e.target.value));
    // getUsers();
    // const updateUsers = await handleExchangeError(sterileData.slice(0, 20), e.target.value);
    // setAllUsers(updateUsers);
  };
  
  // const handleExchangeError = async (allUsers, n) => {
    // const resp =  await axios.post('http://localhost:3030/update', { allUsers, n });
    // return resp.data;
  // };

  const handleChangeInput = async (e) => {
    setInputValue('');
    if (e.target.value) {
      if (Number(e.target.value) < 1001) {
        setInputValue(Number(e.target.value));
        setErrorValue(Number(e.target.value) / 100);
        // const updateUsers = await handleExchangeError(sterileData.slice(0, 20), Number(e.target.value) / 100);
        // setAllUsers(updateUsers)
        // getUsers()
      }
    }
  };

//   // SEED
  const handleChangeSeed = async (e) => {
    e.preventDefault();
    const randomSeed = seedrandom(seedValue);
    const newSeed = Math.floor(randomSeed.quick() * 1000000);
    setSeedValue(newSeed)
  }

  // useEffect(() => {
  //   postSeed();
  // }, [])
   
 const fetchUsers = async () => {
    try {
      const response = await axios.post('http://localhost:3030/users', { 'region': selectedRegion, 'seed': seedValue, 'errors': inputValue, 'length': lengthUsers })
      setAllUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }

useEffect(() => {
  fetchUsers()
}, [selectedRegion, seedValue, inputValue])

  return (
    <div className="pt-4">
      <div className="d-flex flex-row justify-content-between align-items-center mb-3">
       <div className="d-flex flex-row align-items-center">
      <div style={{marginRight: '10px'}}><label>Region:</label></div>
      <select value={selectedRegion} onChange={handleChangeRegion} style={{
        marginRight: '50px',
        height: '30px'
      }}>
        <option value='UK'>UK</option>
        <option value='SPAIN'>SPAIN</option>
        <option value='FRANCE'>FRANCE</option>
      </select>
    </div>
    <div className="d-flex flex-row align-items-center">
      <label htmlFor="errorSlider" style={{marginRight: '10px'}}>Errors:</label>
      <input
      type="range"
      value={errorValue}
      onChange={handleChangeSlider}
      step={0.5}
      min={0}
      max={10}
      style={{marginRight: '10px'}}
      ></input>
      <input 
      type="number"
      value={inputValue}
      min={0}
      max={1000}
      onChange={handleChangeInput}
      style={{height: '30px', marginRight: '50px'}}
      ></input>
    </div>
    <div className="d-flex align-items-center">
      <label style={{ marginRight: '10px' }}>Seed:</label>
      <input 
      type="number"
      value={seedValue}
      onChange={(e) => setSeedValue(e.target.value)}
      min={0}
      style={{ height: '30px' }}
      ></input>
      <button className="btn" onClick={handleChangeSeed} style={{paddingRight: '0'}}>
        <img src={randomIcon} alt='random' style={{ maxWidth: '30px' }} />
      </button>
    </div>
    </div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {allUsers.map((user, index) => (
        <tr key={user.id} style={{ border: '1px solid #eee', marginBottom: '10px' }}>
          <td style={{ paddingRight: '10px', paddingLeft: '10px' }}>{ index + 1 }.</td>
          <td style={{ paddingRight: '20px' }}>{user.id}</td>
          <td style={{ paddingRight: '20px' }}>{user.fullname}</td>
          <td style={{ paddingRight: '20px' }}>{user.address}</td>
          <td style={{ paddingRight: '20px' }}>{user.phone}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </div> 
  )
}

export default Common;