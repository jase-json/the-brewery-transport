import * as React from 'react';
import { createUseStyles } from "react-jss";

const IconButton = (props) => {

    const useStyles = createUseStyles({
        myButton: {
            'margin': '10px',
            'height': '30px',
            'width': '30px',
            'backgroundColor': 'white',
            'zIndex': '1',
        },
        icon: {
            'marginLeft': '-5px',
            'backgroundColor': 'white',
        }
    });

    const classes = useStyles();

    return (
        <>
            <button className={classes.myButton}>
                <img className={classes.icon} alt='icon' src={props.icon} />
            </button>
        </>
    )
}

export default IconButton;