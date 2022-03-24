import * as React from 'react';

const Modal = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    return (
        <React.Fragment>
            <button onClick={handleOpen}>Open modal</button>
            <div>MODAL</div>
            <button>Close Modal</button>
        </React.Fragment>
    )
}

export default Modal;
