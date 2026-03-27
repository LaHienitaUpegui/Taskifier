import Button from "./Button";
import "../styles/AddNewTaskForm.css";
import { useState } from "react";
import type { Project, Task } from "../types";

type AddNewTaskFormProps = {
    onClose: () => void;
    addTask: (project: Project, task: Task) => void;
    project: Project;
};

function AddNewTaskForm({ onClose, addTask, project }: AddNewTaskFormProps) {
    const [taskTitle, setTaskTitle] = useState("");

    function addTaskAndClose(e: React.FormEvent) {
        e.preventDefault();

        if (taskTitle.trim() === "") {
            alert("Task title cannot be empty.");
            return;
        }

        const newTask: Task = {
            id: Date.now(),
            title: taskTitle,
            status: "pending",
        };

        addTask(project, newTask);
        onClose();
    }

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
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
            </div>

            <div className="add-task__buttons-container">
                <Button
                    innerText="Create Task"
                    buttonType="primary"
                    isSubmitButton={true}
                    onClickFunction={() =>
                        addTaskAndClose(
                            event as unknown as React.FormEvent<HTMLFormElement>,
                        )
                    }
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
