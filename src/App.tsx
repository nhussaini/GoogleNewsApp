import React, { useState } from 'react';
import './App.css';
import Loader from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="App">
      {/* <header className="App-header">Welcome to SkillReactor!</header> */}
      {loading && <Loader />}
    </div>
  );
}

export default App;
