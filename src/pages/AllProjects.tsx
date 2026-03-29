import { useMemo, useState } from "react";
import "../styles/all-projects-page.css";
import type { Project } from "../types";
import { useProjects } from "../services/useProjects";
import Button from "../components/Button";
import GeneralModal from "../components/GeneralModal";
import SelectedProjectInfo from "../components/SelectedProjectInfo";
import CreateProjectForm from "../components/CreateProjectForm";
import { Link } from "react-router-dom";

function AllProjects() {
    const { projects, addNewProject } = useProjects();

    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );
    const [selectedDesktopProject, setSelectedDesktopProject] =
        useState<Project | null>(null);
    const [statusSelected, setStatusSelected] = useState<string>("active");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [createProjectModalOpen, setCreateProjectModalOpen] =
        useState<boolean>(false);

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesStatus =
                statusSelected === "active"
                    ? project.status === "active"
                    : project.status === "completed";

            const matchesSearchTerm = project.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

            return matchesStatus && matchesSearchTerm;
        });
    }, [projects, statusSelected, searchTerm]);

    function handleSeeInfoClick(project: Project) {
        const isMobile = window.innerWidth < 1024;

        if (isMobile) {
            setSelectedProject(project);
        } else {
            setSelectedDesktopProject(project);
        }
    }

    return (
        <div className="all-projects">
            <section className="all-projects__container">
                <div className="all-projects__header">
                    <h1>All Projects</h1>

                    <div className="all-projects__filters">
                        <div className="all-projects__statuses">
                            <small
                                className={`all-projects__status ${statusSelected === "active" ? "all-projects__status-selected" : "all-projects__status-not-selected"}`}
                                onClick={() => setStatusSelected("active")}
                            >
                                Active
                            </small>
                            <small
                                className={`all-projects__status ${statusSelected === "completed" ? "all-projects__status-selected" : "all-projects__status-not-selected"}`}
                                onClick={() => setStatusSelected("completed")}
                            >
                                Completed
                            </small>
                        </div>

                        <input
                            type="text"
                            className="all-projects__searchbar"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <Button
                            buttonType="blue-button"
                            innerText="Create a project"
                            onClickFunction={() =>
                                setCreateProjectModalOpen(true)
                            }
                            haveIcon={true}
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="var(--neon-blue-buttons-bg)"
                                        d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1"
                                    />
                                </svg>
                            }
                            customClassName="all-projects__create-button--desktop"
                        />
                    </div>
                </div>

                <div className="all-projects__list">
                    {statusSelected === "active" && (
                        <Button
                            buttonType="blue-button"
                            innerText="Create a project"
                            onClickFunction={() =>
                                setCreateProjectModalOpen(true)
                            }
                            haveIcon={true}
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="var(--neon-blue-buttons-bg)"
                                        d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1"
                                    />
                                </svg>
                            }
                            customClassName="all-projects__create-button--mobile"
                        />
                    )}

                    {filteredProjects.length > 0 ? (
                        <>
                            {filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="all-projects__project"
                                    onClick={() => handleSeeInfoClick(project)}
                                >
                                    <h6 className="all-projects__project-title">
                                        {project.name}
                                    </h6>
                                    <div className="all-projects__project-actions">
                                        <Link to={`/projects/${project.id}`}>
                                            <Button
                                                innerText="Open project"
                                                buttonType="primary"
                                            />
                                        </Link>
                                        <Button
                                            innerText="See info"
                                            buttonType="secondary"
                                            onClickFunction={() =>
                                                handleSeeInfoClick(project)
                                            }
                                            customClassName="all-projects__see-info-button"
                                        />
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="all-projects__no-projects">
                            <p>No projects found</p>
                            <small>Check if the name is correct</small>
                        </div>
                    )}
                </div>
            </section>

            <section className="all-projects__project-info">
                {selectedDesktopProject ? (
                    <SelectedProjectInfo
                        project={selectedDesktopProject}
                        customClassName="selected-project-info--desktop"
                    />
                ) : (
                    <div>
                        <h6>Select a project to see its details</h6>
                    </div>
                )}
            </section>

            <GeneralModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            >
                {selectedProject && (
                    <SelectedProjectInfo
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </GeneralModal>

            <GeneralModal
                isOpen={createProjectModalOpen}
                onClose={() => setCreateProjectModalOpen(false)}
            >
                <CreateProjectForm
                    onClose={() => setCreateProjectModalOpen(false)}
                    addProject={addNewProject}
                />
            </GeneralModal>
        </div>
    );
}

export default AllProjects;
