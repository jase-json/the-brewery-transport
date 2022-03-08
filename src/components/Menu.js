import * as React from 'react';
import Button from './Button';
import { createUseStyles } from "react-jss";
import LayoutIcon from '../assets/layout.png';
import Beer from '../assets/beer.png'

const Menu = () => {

    const useStyles = createUseStyles({
        menu: {
            'marginTop': '45px',
            'marginLeft': '15px',
            'border': '5px',
            // 'background': 'grey',
            // 'opacity': '50%'
        },
    });

    const classes = useStyles();

    return (
        <>
            <div className={classes.menu}>
                <Button icon={LayoutIcon} />
                <Button icon={Beer} />
            </div>
        </>
    )
}

export default Menu;