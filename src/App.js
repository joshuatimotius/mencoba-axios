import React from 'react';
import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';
import './App.scss';
import PDFViewer from './Components/PDFViewer/PDFViewer';
import pdfjs from './docs/pdf';

function App() {
  return (
    <div className='form'>
      <PDFViewer backend={pdfjs} src='/sample.pdf'/>
      <PersonInput />
      <PersonList />
    </div>
  );
}

export default App;
