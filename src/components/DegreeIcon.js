import * as React from 'react';
import snowFlake from '../../src/assets/snow.png'

const DegreeIcon = () => {
    return (
        <img className="snow-logo" alt="snowflake" src={snowFlake} style={{
            'maxWidth': '60px',
            'opacity': '60%',
            'paddingRight': '40px',
        }} />
    )
};

export default DegreeIcon;