import React, { useRef } from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home/Home';
import About from '../components/About/About';

const index = () => {
  return (
    <>
      <div className="container">
        <Home></Home>
      </div>
    </>
  );
};

export default index;
