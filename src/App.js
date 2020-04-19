import React from 'react';
import './App.css';
import Search from './components/Search';

function success(pos) {
  
  const crd = pos.coords;
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

function App() {
  navigator.geolocation.getCurrentPosition(success, error);
  const crd = '40.416775,-3.703790';

  return (
    <div className="App">
      <Search location={crd}/>
    </div>
  );
}

export default App;
