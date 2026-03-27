import Button from "./Button";
import "../styles/AddNewTaskForm.css";

type AddNewTaskFormProps = {
    onClose: () => void;
};

function AddNewTaskForm({ onClose }: AddNewTaskFormProps) {
    return (
        <form className="add-task">
            <h3 className="add-task__title">Add a new task</h3>

            <div className="add-task__input-container">
                <label htmlFor="task-name" className="add-task__label">
                    Name
                </label>
                <input
                    type="text"
                    id="task-name"
                    name="task-name"
                    className="add-task__input"
                    placeholder="Enter task title"
                />
            </div>

            <div className="add-task__buttons-container">
                <Button
                    innerText="Create Task"
                    buttonType="primary"
                    isSubmitButton={true}
                />
                <Button
                    innerText="Cancel"
                    buttonType="secondary"
                    onClickFunction={onClose}
                />
            </div>
        </form>
    );
}

export default AddNewTaskForm;
