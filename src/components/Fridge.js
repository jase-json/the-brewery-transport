import * as React from 'react';

const Fridge = (props) => {

    const [fridgeName, setFridgeName] = React.useState("+");

    const onBeerSelected = (beerTitle) => {
        setFridgeName(beerTitle);
    }

    const props2 = () => {
        return {
            ...props,
            onBeerSelected,
        }
    }
    
    return (
        <button onClick={() => props.showModal(props2)} style={{
            'padding': '75px 45px 75px 45px',
            'border': '10px solid #999999',
            'fontSize': '300%',
            'color': 'green',
            }}
        >
            {fridgeName}
        </button>
    )
};

export default Fridge;