import React from 'react';
import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';
import './App.scss';

function App() {
  return (
    <div className='form'>
      <PersonInput />
      <PersonList />
    </div>
  );
}

export default App;
