import * as React from 'react';

import ButtonDial from './components/menu/ButtonDial';
import Header from './components/Header.js';
import Truck from './components/Truck';
import BeerSelection from './components/BeerSelection';

const App = () => {
  const [showModal, setShowModal] = React.useState();
  
  const closeModal = () => setShowModal(false);
  const showModalProp = () => setShowModal(true);

  const props = {
    closeModal: closeModal,
    showModal: showModalProp
  };

  const renderOverlayBackgound = () => {
    return (
      <>
        <div className="overlay" onClick={() => setShowModal(false)}></div>
      </>
    );
  };

  const renderApp = () => {
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
            <ButtonDial />
          </footer>
        </div>
      </>
    );
  }

  const renderModal = () => {
    return (
      <>
        {renderApp()}
        {showModal && renderOverlayBackgound()}
        {showModal && <BeerSelection {...props} />}
      </>
    );
  }
  return <div className="App">{renderApp()}</div>;
};

export default App;
