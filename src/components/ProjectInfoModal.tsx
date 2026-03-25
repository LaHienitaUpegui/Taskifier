import { createPortal } from "react-dom";
import "../styles/project-info-modal.css";

type ProjectInfoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

function ProjectInfoModal({
    isOpen,
    onClose,
    children,
}: ProjectInfoModalProps) {
    if (!isOpen) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="modal-header">
                    <button onClick={onClose} className="return-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="var(--orange-icons-fill)"
                                d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"
                            />
                        </svg>{" "}
                        Return
                    </button>
                </header>

                <div className="modal-body">{children}</div>
            </div>
        </div>,
        document.body,
    );
}

export default ProjectInfoModal;
