import React, { useState } from "react";
import MonitoringItem from "../complix/MonitoringItem";
import SlideShow from "./SlideShow";
import Modal from "./Modal";

function ModalButton({ id, index, src, temperature, wet, location, date }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div style={{ cursor: "pointer", width: "fit-content" }}>
      <Modal
        isOpen={isOpen}
        buttonChild={
          <MonitoringItem src={src} temperature={temperature} wet={wet} location={location} date={date} />
        }
      >
        <SlideShow initImg={`${id}`} index={index} />
      </Modal>
    </div>
  );
}

export default ModalButton;
