import React from 'react';
import './App.css';
import Converter from "./components/Converter";

const App : React.FC = () => {

  return (
    <div className="app">
      <Converter/>
    </div>
  );
}

export default App;
