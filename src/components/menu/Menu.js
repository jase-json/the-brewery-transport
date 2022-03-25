import * as React from 'react';
import IconButton from '../IconButton';
import { createUseStyles } from "react-jss";
import LayoutIcon from '../../assets/layout.png';
import Beer from '../../assets/beer.png'
import ModalOverlay from '../ModalOverlay'

const Menu = () => {
    const [showModal, setShowModal] = React.useState(true);

    const useStyles = createUseStyles({
        menu: {
            'marginTop': '45px',
            'marginLeft': '10px',
            'border': '5px',
            'zIndex': '1',
        },
    });

    const classes = useStyles();

    const hideModal = () => {
        setShowModal(false);
    }

    const props = {
        closeModal: hideModal
    };

    return (
        <>
            {showModal && <ModalOverlay {...props} />}
            <div className={classes.menu}>
                <IconButton icon={LayoutIcon} />
                <IconButton icon={Beer} />
            </div>
        </>
    )
}

export default Menu;