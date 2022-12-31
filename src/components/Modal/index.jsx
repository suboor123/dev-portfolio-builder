import React from "react";
import { Modal } from "rsuite";

const Popup = ({ show, handleClose, heading, children, size="md" }) => {
  return (
    <Modal open={show} onClose={handleClose} size={size}>
      <Modal.Header>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default Popup;
