import * as React from 'react';

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
    </div>
    </>
  );
}

export default App;

// react storybooks
// use mui speed-dial for button (bottom-left) reference