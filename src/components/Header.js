import * as React from 'react';
import DegreeIcon from './DegreeIcon';

const Header = () => {
    return (
        <header className="App-header" style={{
            'padding': '25px',
            'fontSize': '300%',
            'display': 'flex',
            'justifyContent': 'space-between',
            'fontFamily': 'monospace',
        }}>
            <div>The Brewery Transport</div>
            <DegreeIcon />
      </header>
    )
};

export default Header;