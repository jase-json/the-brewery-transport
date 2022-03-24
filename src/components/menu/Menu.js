import * as React from 'react';
import IconButton from '../IconButton';
import { createUseStyles } from "react-jss";
import LayoutIcon from '../../assets/layout.png';
import Beer from '../../assets/beer.png'

const Menu = () => {

    const useStyles = createUseStyles({
        menu: {
            'marginTop': '45px',
            'marginLeft': '10px',
            'border': '5px',
        },
    });

    const classes = useStyles();

    return (
        <>
            <div className={classes.menu}>
                <IconButton icon={LayoutIcon} />
                <IconButton icon={Beer} />
            </div>
        </>
    )
}

export default Menu;