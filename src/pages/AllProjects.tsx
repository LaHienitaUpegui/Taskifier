import { useMemo, useState } from "react";
import "../styles/all-projects-page.css";
import type { Project } from "../types";
import allProjectsData from "../data/projects.json";
import Button from "../components/Button";

function AllProjects() {
    const mockProjects: Project[] = allProjectsData as Project[];

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
                    filteredProjects.map((project) => (
                        <div key={project.id} className="project-container">
                            <h6 className="project-title">{project.name}</h6>
                            <div className="buttons">
                                <Button
                                    innerText="Open project"
                                    buttonType="primary"
                                />
                                <Button
                                    innerText="See info"
                                    buttonType="secundary"
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-projects-message">No projects found.</p>
                )}
            </section>
        </div>
    );
}

export default AllProjects;
