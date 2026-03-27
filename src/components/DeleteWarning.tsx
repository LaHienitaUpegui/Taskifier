import Button from "./Button";
import "../styles/delete-warning.css";

type DeleteWarningProps = {
    onClose: () => void;
    onDelete: () => void;
};

function DeleteWarning({ onClose, onDelete }: DeleteWarningProps) {
    return (
        <div className="delete-warning">
            <small className="delete-warning__title">
                Are you sure you want to delete the project? Once deleted it can
                not be reverted
            </small>

            <div className="delete-warning__buttons">
                <Button
                    buttonType="danger"
                    innerText="Yes, delete"
                    onClickFunction={onDelete}
                />
                <Button
                    buttonType="secondary"
                    innerText="Cancel"
                    onClickFunction={onClose}
                />
            </div>
        </div>
    );
}

export default DeleteWarning;
