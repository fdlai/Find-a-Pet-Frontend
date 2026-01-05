import "../blocks/ImageModal.css";
import { MouseEvent, useEffect, SyntheticEvent } from "react";
import imageNotFound from "../assets/image-not-found.jpg";

interface ImageModalProps {
  imageUrl: string;
  altText: string;
  isOpen: boolean;
  closeModal: () => void;
}

export default function ImageModal({
  isOpen,
  imageUrl,
  altText,
  closeModal,
}: ImageModalProps) {
  function handleOverlayClick(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains("modal_opened")) {
      closeModal();
    }
  }

  function handlePressEsc(e: KeyboardEvent) {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handlePressEsc);
    }
    return () => {
      document.removeEventListener("keydown", handlePressEsc);
    };
  }, [isOpen]);

  return (
    <div
      className={`modal ${isOpen && "modal_opened"}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="modal__container">
        <button className="modal__close-button" onClick={closeModal}>
          Close
        </button>
        <img
          src={imageUrl}
          alt={altText}
          className="modal__image"
          onError={(e: SyntheticEvent<HTMLImageElement>) =>
            ((e.target as HTMLImageElement).src = imageNotFound)
          }
        />{" "}
      </div>
    </div>
  );
}
