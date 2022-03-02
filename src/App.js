import * as React from 'react';

import ButtonDial from './components/ButtonDial.js';
import Header from './components/Header.js';
import Truck from './Truck';

function App() {
  return (
    <>
      <Header />
      <div className="App" style={{
        'display': 'flex',
        'paddingTop': '50px',
        'justifyContent': 'center',
      }}>
        <Truck />
      </div>
      <footer style={{
        'paddingLeft': '40px',
      }}>
        <ButtonDial />
      </footer>
    </>
  );
}

export default App;

// react storybooks
// use mui speed-dial for button (bottom-left) reference