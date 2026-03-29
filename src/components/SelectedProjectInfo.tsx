import type { Project } from "../types";
import "../styles/selected-project-info.css";
import Button from "./Button";
import { Link } from "react-router-dom";

type SelectedProjectInfoProps = {
    project: Project;
    onClose?: () => void;
    customClassName?: string;
};

function SelectedProjectInfo({
    project,
    onClose,
    customClassName,
}: SelectedProjectInfoProps) {
    return (
        <div className={`selected-project-info ${customClassName || ""}`}>
            <div className="title-and-desc">
                <h3>{project.name}</h3>
                <small>{project.description}</small>
            </div>

            <div className="tasks-info-container">
                <p className="tasks-subtitle">Tasks of the project</p>

                <div className="tasks-information">
                    <div className="info-container">
                        <small className="info-subtitle">Completed</small>
                        <small>
                            {
                                project.tasks.filter(
                                    (task) => task.status === "completed",
                                ).length
                            }
                        </small>
                    </div>

                    <div className="info-container">
                        <small className="info-subtitle">Pending</small>
                        <small>
                            {
                                project.tasks.filter(
                                    (task) => task.status === "pending",
                                ).length
                            }
                        </small>
                    </div>

                    <div className="info-container">
                        <small className="info-subtitle">Total</small>
                        <small>{project.tasks.length}</small>
                    </div>
                </div>
            </div>

            <Link to={`/projects/${project.id}`} className="open-project-link">
                <Button
                    innerText="Open project"
                    buttonType="primary"
                    onClickFunction={onClose}
                />
            </Link>
        </div>
    );
}

export default SelectedProjectInfo;
