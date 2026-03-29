import Button from "./Button";
import GeneralModal from "./GeneralModal";
import AddNewTaskForm from "./AddNewTaskForm";
import "../styles/PendingTasks.css";
import type { Task, Project } from "../types";
import { useState } from "react";

type PendingTasksProps = {
    project: Project;
    pendingTasks: Task[];
    addTaskToProject: (project: Project, task: Task) => void;
    completeTask: (project: Project, taskId: number) => void;
    deleteTaskFromProject: (project: Project, taskId: number) => void;
};

function PendingTasks({
    project,
    pendingTasks,
    addTaskToProject,
    completeTask,
    deleteTaskFromProject,
}: PendingTasksProps) {
    const addIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="var(--green-intense-icons-fill)"
                d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1"
            />
        </svg>
    );

    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

    return (
        <div className="pending-tasks">
            <Button
                innerText="Add new Task"
                buttonType="primary"
                haveIcon={true}
                icon={addIcon}
                onClickFunction={() => setIsAddTaskModalOpen(true)}
            />

            {pendingTasks.length === 0 ? (
                <div className="pending-tasks__empty">
                    <small className="pending-tasks__message">
                        You have no pending tasks.
                        <br />
                        Great job!
                    </small>
                </div>
            ) : (
                <div className="pending-tasks__tasks-container">
                    {pendingTasks.map((task) => (
                        <div
                            key={task.id}
                            className="pending-tasks__task-container"
                        >
                            <p className="pending-tasks__task-title">
                                {task.title}
                            </p>

                            <div className="pending-tasks__buttons-container">
                                <Button
                                    innerText="Complete"
                                    buttonType="primary"
                                    onClickFunction={() =>
                                        completeTask(project, task.id)
                                    }
                                />
                                <Button
                                    innerText="Delete"
                                    buttonType="danger"
                                    onClickFunction={() =>
                                        deleteTaskFromProject(project, task.id)
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <GeneralModal
                isOpen={isAddTaskModalOpen}
                onClose={() => setIsAddTaskModalOpen(false)}
            >
                <AddNewTaskForm
                    onClose={() => setIsAddTaskModalOpen(false)}
                    addTask={addTaskToProject}
                    project={project}
                />
            </GeneralModal>
        </div>
    );
}

export default PendingTasks;
