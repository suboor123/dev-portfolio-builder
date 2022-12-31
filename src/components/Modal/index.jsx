import React from "react";
import { Modal } from "rsuite";

const Popup = ({ show, handleClose, heading, children, size="md", description }) => {
  return (
    <Modal open={show} onClose={handleClose} size={size}>
      <Modal.Header>
        <Modal.Title>
        <h5>{heading}</h5>
        <p>{description}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default Popup;
