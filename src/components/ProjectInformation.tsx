import Button from "./Button";
import "../styles/ProjectInformation.css";
import type { Project } from "../types";

type ProjectInformationProps = {
    project: Project;
};

function ProjectInformation({ project }: ProjectInformationProps) {
    const trashIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <g fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 5a1 1 0 0 0-1 1h4a1 1 0 0 0-1-1h-2zm0-2a3 3 0 0 0-3 3H4a1 1 0 0 0 0 2h1v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2h-4a3 3 0 0 0-3-3h-2zm0 8a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5zm4 0a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5z"
                    fill="var(--red-warning-icons-fill)"
                />
            </g>
        </svg>
    );

    return (
        <div className="project-info">
            <div className="project-info__description">
                <p className="project-info__description-title">
                    About the project
                </p>
                <small className="project-info__description-text">
                    {project.description}
                </small>
            </div>

            <div className="project-info__information">
                <div className="project-info__info-item">
                    <small className="project-info__info-label">Status</small>
                    <small className="project-info__info-value">
                        {project.status.charAt(0).toUpperCase() +
                            project.status.slice(1)}
                    </small>
                </div>
                <div className="project-info__info-item">
                    <small className="project-info__info-label">
                        Creation date
                    </small>
                    <small className="project-info__info-value">
                        {project.creationDate}
                    </small>
                </div>
                <div className="project-info__info-item">
                    <small className="project-info__info-label">
                        Pending tasks
                    </small>
                    <small className="project-info__info-value">
                        {
                            project.tasks.filter(
                                (task) => task.status === "pending",
                            ).length
                        }{" "}
                        {" tasks"}
                    </small>
                </div>
                <div className="project-info__info-item">
                    <small className="project-info__info-label">
                        Completed tasks
                    </small>
                    <small className="project-info__info-value">
                        {
                            project.tasks.filter(
                                (task) => task.status === "completed",
                            ).length
                        }
                        {" tasks"}
                    </small>
                </div>
            </div>

            <Button
                innerText="Delete project"
                buttonType="danger"
                haveIcon={true}
                icon={trashIcon}
            />
        </div>
    );
}

export default ProjectInformation;
