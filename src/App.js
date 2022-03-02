import * as React from 'react';

import ButtonDial from './components/ButtonDial.js';
import Header from './components/Header.js';
import Truck from './Truck';

function App() {
  return (
    <><div className="App">
      <Header />
      <body className="game" style={{
        'display': 'flex',
        'padding-top': '50px',
        'justify-content': 'center',
      }}>
        <Truck />
      </body>
      <footer style={{
        'padding-left': '40px',
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