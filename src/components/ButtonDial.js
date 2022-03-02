import * as React from 'react';
import Menu from './Menu';

const ButtonDial = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <>
            <button onClick={() => setMenuOpen((pMenuOpen) => {return !pMenuOpen})} className="ButtonDial" style={{
                'height': '25px',
                'width': '25px',
                'borderRadius': '50%',
                'hover': ''
            }}>
                ...
            </button>
            { menuOpen && <Menu />}
        </>
    )
}

export default ButtonDial;