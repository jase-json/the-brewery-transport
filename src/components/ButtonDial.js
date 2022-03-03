import * as React from 'react';
import Menu from './Menu';
import { createUseStyles } from "react-jss";

const ButtonDial = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const useStyles = createUseStyles({
        myButton: {
            'padding': '20px',
            'margin-top': '100px',
            'height': '25px',
            'width': '25px',
            'borderRadius': '50%',
            '&:after': {
                background: 'green'
            },
        },
    });

    const classes = useStyles();

    return (
        <>
            <button onClick={() => setMenuOpen((pMenuOpen) => {return !pMenuOpen})} className={classes.myButton} />
            { menuOpen && <Menu />}
        </>
    )
}

export default ButtonDial;