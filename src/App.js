import * as React from 'react';

import ButtonDial from './components/menu/ButtonDial';
import Header from './components/Header.js';
import Truck from './components/Truck';
import BeerSelectionComponent from './components/BeerSelectionComponent';

const App = () => {
  const [showModal, setShowModal] = React.useState();
  const [fridgePropsState, setFridgePropsState] = React.useState({});
  
  const closeModal = () => setShowModal(false);
  
  const showModalProp = (fridgeProps) => {
    setFridgePropsState(fridgeProps);
    setShowModal(true)
  };

  const props = {
    closeModal: closeModal,
    showModal: showModalProp,
    fridgePropsState
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
            <Truck {...props}/>
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

  const renderContainer = () => {
    return (
      <>
        {renderApp()}
        {showModal && <BeerSelectionComponent {...props} />}
      </>
    );
  }
  
  return <div className="App">{renderContainer()}</div>;
};

export default App;
