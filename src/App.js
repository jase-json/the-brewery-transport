import * as React from 'react';

import ButtonDial from './components/ButtonDial.js';
import Header from './components/Header.js';
import Truck from './Truck';

function App() {

  // const setOpacity = () => {
  //   document.getElementsByClassName('App').style.setOpacity('50%');
  // }
  // Brian suggestions

  return (
    <>
      <div className="App" style={{ 'maxWidth': '1024px' }}>
        <Header />
        <div className="Truck" style={{
          'display': 'flex',
          'paddingTop': '50px',
          'justifyContent': 'center',
          'maxWidth': '1024px',
        }}>
          <Truck />
        </div>
        <footer style={{
          'paddingLeft': '40px',
          'display': 'flex',
        }}>
          {/* <ButtonDial onClick={() => {
            set 'App' opacity to 50% (Brian suggestions)
            setOpacity();
          }}/> */}
          <ButtonDial />
        </footer>
      </div>
    </>
  );
}

export default App;

// react storybooks
// use mui speed-dial for button (bottom-left) reference