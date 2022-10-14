import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal-root");

const ModalPopup = ({
  children,
  isOpen,
  modalWidth = "500px",
  modalHeight = "500px",
  className,
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      className={`fixed w-full h-full z-40 top-0 left-0 flex justify-center items-center ${className}`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div
        className="bg-white rounded-2xl overflow-y-auto mx-4 md:mx-0"
        style={{
          width: modalWidth,
          height: modalHeight,
          maxHeight: "700px",
          boxShadow: "0px 4px 4px 4px #00000008",
        }}
      >
        {children}{" "}
      </div>
    </div>,
    portalRoot
  );
};

export default ModalPopup;
