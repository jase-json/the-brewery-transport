import * as React from 'react';
import { createUseStyles } from "react-jss";

const Button = (props) => {

    const useStyles = createUseStyles({
        myButton: {
            'margin': '10px',
            'height': '30px',
            'width': '30px',
        },
        icon: {
            'marginLeft': '-5px',
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

export default Button;