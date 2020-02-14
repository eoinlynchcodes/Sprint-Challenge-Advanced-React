import React from 'react';
import DataFetch from './components/DataFetch';
import NavBar from './components/NavBar';
import EmailForm from './components/EmailForm';

function App() {
  return (
    <div className="App">
      <EmailForm/>
      <DataFetch/>
    </div>
  );
}

export default App;

