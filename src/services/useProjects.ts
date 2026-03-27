import { useState } from "react";
import type { Project, Task } from "../types";
import { useNavigate } from "react-router-dom";

export function useProjects() {
    const navigate = useNavigate();

    const [projects, setProjects] = useState<Project[]>(() => {
        const localData = localStorage.getItem("projects");
        return localData ? (JSON.parse(localData) as Project[]) : [];
    });

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

    function deleteProject(projectId: number) {
        const updatedProjects = projects.filter(
            (project) => project.id !== projectId,
        );

        localStorage.setItem("projects", JSON.stringify(updatedProjects));

        setProjects(updatedProjects);
        navigate("/");
    }

    function addTaskToProject(project: Project, task: Task) {
        const updatedProject = {
            ...project,
            tasks: [...project.tasks, task],
        };

        setProjects((prevProjects) => {
            const updatedProjects: Project[] = prevProjects.map((p) =>
                p.id === project.id ? updatedProject : p,
            );

            localStorage.setItem("projects", JSON.stringify(updatedProjects));

            return updatedProjects;
        });
    }

    function completeTask(project: Project, taskId: number) {
        const updatedProject: Project = {
            ...project,
            tasks: project.tasks.map((task) =>
                task.id === taskId ? { ...task, status: "completed" } : task,
            ),
        };

        setProjects((prevProjects) => {
            const updatedProjects: Project[] = prevProjects.map((p) =>
                p.id === project.id ? updatedProject : p,
            );

            localStorage.setItem("projects", JSON.stringify(updatedProjects));

            return updatedProjects;
        });
    }

    function deleteTaskFromProject(project: Project, taskId: number) {
        const updatedProject: Project = {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
        };

        setProjects((prevProjects) => {
            const updatedProjects: Project[] = prevProjects.map((p) =>
                p.id === project.id ? updatedProject : p,
            );

            localStorage.setItem("projects", JSON.stringify(updatedProjects));

            return updatedProjects;
        });
    }

    return {
        projects,
        setProjects,
        addNewProject,
        deleteProject,
        addTaskToProject,
        completeTask,
        deleteTaskFromProject,
    };
}
