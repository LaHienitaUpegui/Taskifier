import "../styles/create-project-form.css";
import Button from "./Button";
import type { Project, Task } from "../types";
import { useState } from "react";

type CreateProjectFormProps = {
    onClose: () => void;
    addProject: (project: Project) => void;
};

function CreateProjectForm({ onClose, addProject }: CreateProjectFormProps) {
    const [addedTasks, setAddedTasks] = useState<Task[]>([]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newProject: Project = {
            id: Number(Date.now().toString()),
            name: formData.get("project-name") as string,
            description: formData.get("project-description") as string,
            creationDate: new Date().toISOString(),
            status: "active",
            tasks: addedTasks,
        };

        addProject(newProject);
        onClose();
    }

    function handleAddTask(taskTitle: string) {
        const newTask: Task = {
            id: Number(Date.now().toString()),
            title: taskTitle,
            status: "pending",
        };

        setAddedTasks((prevTasks) => [...prevTasks, newTask]);
    }

    function handleRemoveTask(taskId: number) {
        setAddedTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== taskId),
        );
    }

    return (
        <form className="create-project-form" onSubmit={handleSubmit}>
            <h3 className="create-project-form__title">Create a project</h3>

            <div className="create-project-form__inputs-container">
                <div className="create-project-form__input">
                    <label
                        htmlFor="project-name"
                        className="create-project-form__input-label"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="project-name"
                        id="project-name"
                        placeholder="My new project"
                        className="create-project-form__input-field"
                        required
                    />
                </div>
                <div className="create-project-form__input">
                    <label
                        htmlFor="project-description"
                        className="create-project-form__input-label"
                    >
                        Description
                    </label>
                    <textarea
                        name="project-description"
                        id="project-description"
                        placeholder="The description of my new project"
                        className="create-project-form__input-field create-project-form__input-field--textarea"
                        required
                    />
                </div>
                <div className="create-project-form__input">
                    <label
                        htmlFor="project-tasks"
                        className="create-project-form__input-label"
                    >
                        Tasks
                    </label>
                    <input
                        name="project-tasks"
                        id="project-tasks"
                        placeholder="Add a new task"
                        className="create-project-form__input-field"
                    />
                    <Button
                        buttonType="primary"
                        innerText="Add task"
                        onClickFunction={() => {
                            const taskInput = document.getElementById(
                                "project-tasks",
                            ) as HTMLInputElement;
                            if (taskInput && taskInput.value.trim() !== "") {
                                handleAddTask(taskInput.value.trim());
                                taskInput.value = "";
                            }
                        }}
                    />
                </div>

                {addedTasks.length > 0 && (
                    <div className="create-project-form__added-tasks">
                        <small className="create-project-form__added-tasks-title">
                            Added tasks:
                        </small>
                        <ul className="create-project-form__added-tasks-list">
                            {addedTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="create-project-form__added-task-item"
                                >
                                    <li
                                        key={task.id}
                                        className="create-project-form__task"
                                    >
                                        {`- ${task.title}`}
                                    </li>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 20 20"
                                        onClick={() =>
                                            handleRemoveTask(task.id)
                                        }
                                    >
                                        <path
                                            fill="var(--red-warning-texts)"
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="create-project-form__buttons-container">
                <Button
                    innerText="Create"
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

export default CreateProjectForm;
