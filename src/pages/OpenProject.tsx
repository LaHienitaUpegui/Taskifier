import ProjectInformation from "../components/ProjectInformation";
import PendingTasks from "../components/PendingTasks";
import DoneTasks from "../components/DoneTasks";
import { useParams } from "react-router-dom";
import { useProjects } from "../services/useProjects";
import { useState } from "react";
import "../styles/open-project.css";

function OpenProject() {
    const {
        projects,
        deleteProject,
        addTaskToProject,
        completeTask,
        deleteTaskFromProject,
    } = useProjects();
    const [optionSelected, setOptionSelected] = useState<string>("information");

    const { id } = useParams();
    const idAsNumber = Number(id);

    const project = projects.find((p) => p.id === idAsNumber);
    const projectPendingTasks = project?.tasks.filter(
        (task) => task.status === "pending",
    );
    const projectDoneTasks = project?.tasks.filter(
        (task) => task.status === "completed",
    );

    return (
        <div className="open-project">
            {!project && <h2>Project not found</h2>}

            <div className="open-project__title-options">
                <h2 className="open-project__title">
                    {project ? project.name : ""}
                </h2>

                <div className="open-project__options-container">
                    <small
                        className={`open-project__option ${optionSelected === "information" ? "open-project__option--selected" : ""}`}
                        onClick={() => setOptionSelected("information")}
                    >
                        Information
                    </small>
                    <small
                        className={`open-project__option ${optionSelected === "tasks" ? "open-project__option--selected" : ""}`}
                        onClick={() => setOptionSelected("tasks")}
                    >
                        Tasks
                    </small>
                    <small
                        className={`open-project__option ${optionSelected === "done-tasks" ? "open-project__option--selected" : ""}`}
                        onClick={() => setOptionSelected("done-tasks")}
                    >
                        Done tasks
                    </small>
                </div>
            </div>

            {optionSelected === "information" && project && (
                <ProjectInformation
                    project={project}
                    deleteProject={deleteProject}
                />
            )}
            {optionSelected === "tasks" && projectPendingTasks && project && (
                <PendingTasks
                    project={project}
                    pendingTasks={projectPendingTasks}
                    addTaskToProject={addTaskToProject}
                    completeTask={completeTask}
                    deleteTaskFromProject={deleteTaskFromProject}
                />
            )}
            {optionSelected === "done-tasks" && projectDoneTasks && (
                <DoneTasks doneTasks={projectDoneTasks} />
            )}
        </div>
    );
}

export default OpenProject;
