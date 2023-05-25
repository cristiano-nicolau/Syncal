import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default function CustomModal({
  title = "Title",
  isOpen,
  toggle,
  onCancel,
  cancelText,
  onSubmit,
  submitText,
  onDelete,
  deleteText,
  children
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        {/* {state.clickInfo && (
          <Button color="primary" id="gobackbutton"onClick={handleDelete}>
            Delete
          </Button>
        )}
        {state.clickInfo && (
          <Button color="secondary" id="gobackbutton" onClick={handleEdit}>
            Edit
          </Button>
        )} */}
        {onCancel && (
          <Button color="secondary" id="gobackbutton" onClick={onCancel}>
            {cancelText || "Cancel"}
          </Button>
        )}
        {onDelete && (
          <Button color="primary" id="gobackbutton" onClick={onDelete}>
            {deleteText || "Delete"}
          </Button>
        )}
        {onSubmit && (
          <Button color="primary" id="gobackbutton" onClick={onSubmit}>
            {submitText || "Submit"}
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
}
