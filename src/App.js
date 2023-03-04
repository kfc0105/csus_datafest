import './App.css';
import React, { useEffect } from 'react'
import LandingPage from './landingPage';

function App() {
  useEffect(() => {
    document.title = "CSUS DataFest"
  }, [])
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
