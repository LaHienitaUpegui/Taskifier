import projectData from "../data/projects.json";
import "../styles/home-page.css";
import type { Project } from "../types";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function HomePage() {
    const mockProjects: Project[] = projectData as Project[];

    const activeProjects = mockProjects.filter(
        (project) => project.status === "active",
    );

    return (
        <div className="homepage">
            <h1>Recent projects</h1>

            <section className="projects-displayer">
                {activeProjects.map((project) => (
                    <div key={project.id} className="project-container">
                        <div className="title-and-desc">
                            <h6 className="project-title">{project.name}</h6>
                            <small>{project.description}</small>
                        </div>

                        <Link to={`/projects/${project.id}`}>
                            <Button
                                innerText="Open project"
                                buttonType="primary"
                            />
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default HomePage;
