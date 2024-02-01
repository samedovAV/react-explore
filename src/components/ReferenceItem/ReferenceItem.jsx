import { useState } from "react";
import Modal from "../Modal/Modal";

export default function ReferenceItem({ link, name }) {
  const[modal, setModal] = useState(false)

  function openModal() {
    setModal(true)
  }

  return(
    <>
    <li onClick={openModal}>
      <a href={link} target="_blank">
        {name}
      </a>
    </li>

    <Modal open={modal}>
      <h3>Hello from modal</h3>
      <p>Text</p>
      <button onClick={() => setModal(false)}>close</button>
    </Modal>
    </>
  )
}