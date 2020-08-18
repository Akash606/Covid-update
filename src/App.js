import React from 'react';
import logo from './logo.svg';
import FQA from './Componets/FQA';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Componets/Card';
import Message from './Componets/Jumbotron';
import request from './request/request';

function App() {
  return (
    <div className="container">
      <Message />

      <div className="Province">
        <h1 className="lead text-black-50">Nepal Acive Cases Updates By Province</h1>
      </div>
      <Card fetchUrl={request.providence} />
      <hr />
      <div className="Province">
        <h1 className="lead text-black-50">Nepal Total Cases Updates By Province</h1>
      </div>
      <Card active={request.providence} />
      <div className="Fqa">
        <h1 className="lead text-black-50">Hospital</h1>
      </div>
      <FQA hospital={request.hospital} />
    </div>



  );
}

export default App;
