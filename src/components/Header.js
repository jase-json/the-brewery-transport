import * as React from 'react';
import DegreeIcon from './DegreeIcon';

const Header = () => {
    return (
        <header className="App-header" style={{
            'padding': '25px',
            'font-size': '300%',
            'display': 'flex',
            'justify-content': 'space-between',
        }}>
            <div>The Brewery Transport</div>
            <DegreeIcon />
      </header>
    )
};

export default Header;