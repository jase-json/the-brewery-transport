import * as React from 'react';
import snowFlake from '../../src/assets/snowIcon.png'
import { createUseStyles } from "react-jss";

const DegreeIcon = () => {

    const useStyles = createUseStyles({
        snowIcon: {
            maxWidth: '60px',
            opacity: '60%',
            paddingRight: '40px',
            // animation: '1s rotate',
            // '@keyframes rotate': {
            //     '0%': {
            //       transform: 'rotate(0deg)',
            //     },
            //     '50%': {
            //       transform: 'rotate(180deg)',
            //     },
            //     '100%': {
            //       transform: 'rotate(360deg)',
            //     },
            // },
        },
    });

    const classes = useStyles();

    return (
        <img className={classes.snowIcon} alt="snowflake" src={snowFlake} />
    )
};

export default DegreeIcon;