import { useMemo, useState } from "react";
import "../styles/all-projects-page.css";
import type { Project } from "../types";
import allProjectsData from "../data/projects.json";
import Button from "../components/Button";
import GeneralModal from "../components/GeneralModal";
import SelectedProjectInfo from "../components/SelectedProjectInfo";
import CreateProjectForm from "../components/CreateProjectForm";
import { Link } from "react-router-dom";

function AllProjects() {
    const mockProjects: Project[] = allProjectsData as Project[];

    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );
    const [statusSelected, setStatusSelected] = useState<string>("active");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [createProjectModalOpen, setCreateProjectModalOpen] =
        useState<boolean>(false);

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
                            <button
                                className="create-project-button"
                                onClick={() => setCreateProjectModalOpen(true)}
                            >
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
                                    <Link to={`/projects/${project.id}`}>
                                        <Button
                                            innerText="Open project"
                                            buttonType="primary"
                                        />
                                    </Link>
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

            <GeneralModal
                isOpen={!!selectedProject}
                onClose={() => handleSetSelectedProject(null)}
            >
                {selectedProject && (
                    <SelectedProjectInfo
                        project={selectedProject}
                        onClose={() => handleSetSelectedProject(null)}
                    />
                )}
            </GeneralModal>

            <GeneralModal
                isOpen={createProjectModalOpen}
                onClose={() => setCreateProjectModalOpen(false)}
            >
                <CreateProjectForm
                    onClose={() => setCreateProjectModalOpen(false)}
                />
            </GeneralModal>
        </div>
    );
}

export default AllProjects;
