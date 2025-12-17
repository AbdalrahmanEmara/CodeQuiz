import { useEffect, useState } from "react";

import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  // Lazy initialization - function only runs once on mount
  const [portalElement] = useState(() => document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      modalRoot.appendChild(portalElement);
    }

    return () => {
      if (portalElement && modalRoot.contains(portalElement)) {
        modalRoot.removeChild(portalElement);
      }
      document.body.style.overflow = "unset";
    };
  }, [isOpen, portalElement]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Don't render until modal is open
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="modal-content bg-slate-800 border border-slate-700 text-white p-6 rounded-2xl w-lg max-w-[calc(100%-20px)]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    portalElement
  );
};

export default Modal;
