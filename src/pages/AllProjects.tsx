import { useMemo, useState } from "react";
import "../styles/all-projects-page.css";
import type { Project } from "../types";
import allProjectsData from "../data/projects.json";
import Button from "../components/Button";
import ProjectInfoModal from "../components/ProjectInfoModal";

function AllProjects() {
    const mockProjects: Project[] = allProjectsData as Project[];

    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );
    const [statusSelected, setStatusSelected] = useState<string>("active");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredProjects = useMemo(() => {
        return mockProjects.filter((project) => {
            const matchesStatus =
                statusSelected === "active"
                    ? project.status === "active"
                    : project.status === "completed";

            const matchesSearchTerm = project.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

            return matchesStatus && matchesSearchTerm;
        });
    }, [mockProjects, statusSelected, searchTerm]);

    function handleSetSelectedProject(project: Project | null) {
        setSelectedProject(project);
    }

    return (
        <div className="all-projects-page">
            <section className="title-and-filters">
                <h1>All Projects</h1>

                <div className="filter-options">
                    <div className="project-statuses">
                        <small
                            className={`status ${statusSelected === "active" ? "selected" : "not-selected"}`}
                            onClick={() => setStatusSelected("active")}
                        >
                            Active
                        </small>
                        <small
                            className={`status ${statusSelected === "completed" ? "selected" : "not-selected"}`}
                            onClick={() => setStatusSelected("completed")}
                        >
                            Completed
                        </small>
                    </div>

                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </section>

            <section className="projects-displayer">
                {filteredProjects.length > 0 ? (
                    <>
                        {statusSelected === "active" && (
                            <button className="create-project-button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    className="add-icon"
                                >
                                    <path
                                        fill="var(--dark-gray-icons-fill)"
                                        d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1"
                                        className="add-icon-path"
                                    />
                                </svg>
                                Create Project
                            </button>
                        )}

                        {filteredProjects.map((project) => (
                            <div key={project.id} className="project-container">
                                <h6 className="project-title">
                                    {project.name}
                                </h6>
                                <div className="buttons">
                                    <Button
                                        innerText="Open project"
                                        buttonType="primary"
                                    />
                                    <Button
                                        innerText="See info"
                                        buttonType="secundary"
                                        onClickFunction={() =>
                                            handleSetSelectedProject(project)
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className="no-projects-found">
                        <p>No projects found</p>
                        <small>Check if the name is correct</small>
                    </div>
                )}
            </section>

            <ProjectInfoModal
                isOpen={!!selectedProject}
                onClose={() => handleSetSelectedProject(null)}
            >
                {selectedProject && (
                    <div className="selected-project-info">
                        <div className="title-and-desc">
                            <h3>{selectedProject.name}</h3>
                            <small>{selectedProject.description}</small>
                        </div>

                        <div className="tasks-info-container">
                            <p className="tasks-subtitle">
                                Tasks of the project
                            </p>

                            <div className="tasks-information">
                                <div className="info-container">
                                    <small className="info-subtitle">
                                        Completed
                                    </small>
                                    <small>
                                        {
                                            selectedProject.tasks.filter(
                                                (task) =>
                                                    task.status === "completed",
                                            ).length
                                        }
                                    </small>
                                </div>

                                <div className="info-container">
                                    <small className="info-subtitle">
                                        Pending
                                    </small>
                                    <small>
                                        {
                                            selectedProject.tasks.filter(
                                                (task) =>
                                                    task.status === "pending",
                                            ).length
                                        }
                                    </small>
                                </div>

                                <div className="info-container">
                                    <small className="info-subtitle">
                                        Total
                                    </small>
                                    <small>
                                        {selectedProject.tasks.length}
                                    </small>
                                </div>
                            </div>
                        </div>

                        <Button
                            innerText="Open project"
                            buttonType="primary"
                            onClickFunction={() =>
                                handleSetSelectedProject(null)
                            }
                        />
                    </div>
                )}
            </ProjectInfoModal>
        </div>
    );
}

export default AllProjects;
