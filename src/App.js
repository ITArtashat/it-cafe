import React from 'react';
import './App.css';
import Header from './header/header'
import { useRoutes } from "react-router-dom";
import { router } from "./Routs/router.js";
import { Link } from 'react-router-dom';

function App() {
 
  return(
    <div className='App'>
      {/* <Header/> */}
      {/* <Section1/>
      <Section3 />
      <Menu />
      <Section4 />
      <Footer /> */}
      {/* <div>
      <button onClick={handleClick}>Scroll to element</button>
      <button onClick={handleClick2}>Scroll to element</button>

      <div style={{ height: '150rem' }} />

      <div ref={ref} style={{ backgroundColor: 'lightblue' }}>
        Coding Beauty
      </div>
      <div style={{ height: '150rem' }} />

      <div ref={usref2} style={{ backgroundColor: 'lightblue' }}>
        Coding Beauty
      </div>
      <div style={{ height: '150rem' }} />
    </div> */}
      {useRoutes(router)}
    
      {/* <Link to="https://www.google.com">Go to Google</Link> */}
    </div>
    
    );
}

export default App;
