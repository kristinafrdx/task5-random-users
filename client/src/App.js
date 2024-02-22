import './App.css';
import Common from './components/Common.js';
import React from 'react';

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="d-flex flex-row justify-content-center" style={{
        height: 'auto',
        marginBottom: '20px',
        width: '1100px',
      }}>
       <Common />
      </div>
    </div>
  );
}

export default App;
