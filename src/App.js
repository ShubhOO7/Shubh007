import React from 'react';
import './App.css';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import Hello from './components/Hello';
import About from './components/About';
import Header from './components/Header';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import Body4 from './components/Body4';
import Body5 from './components/Body5';
import Footer from './components/Footer';
import Message from './components/Message';
function App() {
  return (
      <>
      <Router>
             
             <Routes>
             {/* Self closing Route 1 */}
              <Route exact path ="/" element = {
                  <>
                  <Header/>
                  <Body1/>
                  <Body2/>
                  <Body3/>
                  <Body4/>
                  <Body5/>
                  <Footer/>
                  </>
              } />

              {/* Self closing Route 2 */}
              <Route path= "/connect" element={<Hello/>}/>

              {/* Self closing Route 3 */}
              <Route path= "/about" element={<About/>}/>

              <Route path= "/message" element={<Message/>}/>
          </Routes>

             
      </Router>
         
         
      </>
    
  );
}

export default App;
