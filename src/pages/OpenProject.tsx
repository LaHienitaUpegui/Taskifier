import ProjectInformation from "../components/ProjectInformation";
import PendingTasks from "../components/PendingTasks";
import DoneTasks from "../components/DoneTasks";
import { useParams } from "react-router-dom";
import "../styles/open-project.css";
import mockProjectsData from "../data/projects.json";
import type { Project } from "../types";
import { useState } from "react";

function OpenProject() {
    const [optionSelected, setOptionSelected] = useState<string>("information");

    const mockProjects: Project[] = mockProjectsData as Project[];
    const { id } = useParams();
    const idAsNumber = Number(id);

    const project = mockProjects.find((p) => p.id === idAsNumber);
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
                <ProjectInformation project={project} />
            )}
            {optionSelected === "tasks" && projectPendingTasks && (
                <PendingTasks pendingTasks={projectPendingTasks} />
            )}
            {optionSelected === "done-tasks" && projectDoneTasks && (
                <DoneTasks doneTasks={projectDoneTasks} />
            )}
        </div>
    );
}

export default OpenProject;
