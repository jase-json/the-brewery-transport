import * as React from 'react';
import Fridge from './Fridge';

const Truck = () => {
    return (
        <div className="grid-container">
          <div className="grid-row-one" style={{display: 'flex'}}>
            <Fridge/>
            <Fridge/>
            <Fridge/>
            <Fridge/>
            <Fridge/>
            <Fridge/>
          </div>
          <div className="grid-row-two" style={{display: 'flex'}}>
            <Fridge/>
            <Fridge/>
            <Fridge/>
            <Fridge/>
            <Fridge/>
            <Fridge/>
          </div>
        </div>
    )
};

export default Truck;