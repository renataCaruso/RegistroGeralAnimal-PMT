import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalTerms = (props) => {
  const [show, setShow] = useState(false);
 

  const handleClose = () => {
    setShow(false)
    
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="white"
        onClick={handleShow}
        type={props.type}
        style={props.style}
      >
        {props.name}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
        <Modal.Footer>
          <Button variant="white" onClick={handleClose}>
            {props.textButton}
            {props.onChange}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalTerms;
