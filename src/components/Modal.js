import "./Modal.css";
const Modal = function (props) {
  const closeModal = function () {
    props.setModal(true);
  };
  return (
    <div className={`modal ${!props.modal && "active"}`}>
      <div className="modal-form">
        <div className="head">Некоректний ввід</div>
        <div className="modal-text">Ці поля не можуть бути пустими</div>
        <button onClick={closeModal} className="button-close">
          Закрити
        </button>
      </div>
    </div>
  );
};
export default Modal;
