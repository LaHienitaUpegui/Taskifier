import { useState } from "react";
import type { Project } from "../types";

export function useProjects() {
    const [projects, setProjects] = useState<Project[]>(() => {
        const localData = localStorage.getItem("projects");
        return localData ? (JSON.parse(localData) as Project[]) : [];
    });

    // Check if projects in local storage, if not initialize it with an empty array
    if (!localStorage.getItem("projects")) {
        localStorage.setItem("projects", JSON.stringify([]));
    }

    function addNewProject(newProject: Project) {
        setProjects((prevProjects) => {
            const updatedProjects = [...prevProjects, newProject];
            localStorage.setItem("projects", JSON.stringify(updatedProjects));
            return updatedProjects;
        });
    }

    return { projects, setProjects, addNewProject };
}
