import * as React from 'react';

const Fridge = () => {
    return (
        <button onClick={() => {console.log("ayeeeeee")}} style={{
            'padding': '75px 45px 75px 45px',
            'border': '10px solid #999999',
            'fontSize': '300%',
            'color': 'green',
            }}
        >
            +
        </button>
    )
};

export default Fridge;