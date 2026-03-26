import Button from "../components/Button";
import GeneralModal from "../components/GeneralModal";
import CreateProjectForm from "../components/CreateProjectForm";
import { useEffect, useState } from "react";
import { useProjects } from "../services/useProjects";
import { Link } from "react-router-dom";
import "../styles/home-page.css";

function HomePage() {
    const { projects, addNewProject } = useProjects();

    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

    const activeProjects = projects.filter(
        (project) => project.status === "active",
    );

    useEffect(() => {
        console.log(`Active projects: ${activeProjects.length}`);
    }, [activeProjects.length]);

    return (
        <div className="homepage">
            <h1>Recent projects</h1>

            <section className="homepage__projects-displayer">
                {activeProjects.length === 0 ? (
                    <div className="homepage__no-projects">
                        <small className="homepage__no-projects-message">
                            Still don't have any projects? Create your first one
                            and start managing your tasks today!
                        </small>

                        <Button
                            innerText="Create a new project"
                            buttonType="primary"
                            onClickFunction={() =>
                                setShowCreateProjectModal(true)
                            }
                        />
                    </div>
                ) : (
                    activeProjects.map((project) => (
                        <div
                            key={project.id}
                            className="homepage__project-container"
                        >
                            <div className="homepage__title-and-desc">
                                <h6 className="homepage__project-title">
                                    {project.name}
                                </h6>
                                <small>{project.description}</small>
                            </div>

                            <Link to={`/projects/${project.id}`}>
                                <Button
                                    innerText="Open project"
                                    buttonType="primary"
                                />
                            </Link>
                        </div>
                    ))
                )}
            </section>

            {showCreateProjectModal && (
                <GeneralModal
                    isOpen={showCreateProjectModal}
                    onClose={() => setShowCreateProjectModal(false)}
                >
                    <CreateProjectForm
                        onClose={() => setShowCreateProjectModal(false)}
                        addProject={addNewProject}
                    />
                </GeneralModal>
            )}
        </div>
    );
}

export default HomePage;
