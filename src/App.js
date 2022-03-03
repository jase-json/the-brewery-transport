import * as React from 'react';

import ButtonDial from './components/ButtonDial.js';
import Header from './components/Header.js';
import Truck from './Truck';

function App() {
  return (
    <>
      <div style={{'max-width': '1024px'}}>
      <Header />
      <div className="App" style={{
        'display': 'flex',
        'paddingTop': '50px',
        'justifyContent': 'center',
        'max-width': '1024px',
      }}>
        <Truck />
      </div>
      <footer style={{
        'paddingLeft': '40px',
      }}>
        <ButtonDial />
      </footer>
      </div>
    </>
  );
}

export default App;

// react storybooks
// use mui speed-dial for button (bottom-left) reference