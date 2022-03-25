import * as React from 'react';
import { createUseStyles } from "react-jss";

const ModalOverlay = (props) => {

    const useStyles = createUseStyles({
        overlay: {
            'position': 'fixed',
            'inset': '0px',
            'background-color': 'rgba(0, 0, 0, 0.4)',
            'zIndex': '0',
          },
    });
    
    const classes = useStyles();

    return (
        <div className={classes.overlay} onClick={() => props.closeModal()} />
    )
}

export default ModalOverlay;