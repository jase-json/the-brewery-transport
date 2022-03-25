import * as React from 'react';
import Fridge from './Fridge';

const Truck = (props) => {

  const getFridges = (rowNum) => {
    return (
      [1,2,3,4,5,6].map((num) => {
        const props2 = {
          ...props,
          id:`${rowNum}${num}`,
          key: `${num}`
        };
        return (
          <Fridge {...props2}/>
        )
      })
    )
  }

  return (
      <div className="grid-container">
        <div className="grid-row-one" style={{display: 'flex'}}>
          {getFridges(1)}
        </div>
        <div className="grid-row-two" style={{display: 'flex'}}>
          {getFridges(2)}
        </div>
      </div>
    )
};

export default Truck;