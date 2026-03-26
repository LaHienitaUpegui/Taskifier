import "../styles/create-project-form.css";
import Button from "./Button";
import type { Project } from "../types";

type CreateProjectFormProps = {
    onClose: () => void;
    addProject: (project: Project) => void;
};

function CreateProjectForm({ onClose, addProject }: CreateProjectFormProps) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newProject: Project = {
            id: Number(Date.now().toString()),
            name: formData.get("project-name") as string,
            description: formData.get("project-description") as string,
            creationDate: new Date().toISOString(),
            status: "active",
            tasks: [],
        };

        addProject(newProject);
        onClose();
    }

    return (
        <form className="create-project-form" onSubmit={handleSubmit}>
            <h3 className="create-project-form__title">Create a project</h3>

            <div className="create-project-form__inputs-container">
                <div className="create-project-form__input">
                    <label
                        htmlFor="project-name"
                        className="create-project-form__input-label"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="project-name"
                        id="project-name"
                        placeholder="My new project"
                        className="create-project-form__input-field"
                    />
                </div>
                <div className="create-project-form__input">
                    <label
                        htmlFor="project-description"
                        className="create-project-form__input-label"
                    >
                        Description
                    </label>
                    <textarea
                        name="project-description"
                        id="project-description"
                        placeholder="The description of my new project"
                        className="create-project-form__input-field create-project-form__input-field--textarea"
                    />
                </div>
            </div>

            <div className="create-project-form__buttons-container">
                <Button
                    innerText="Create project"
                    buttonType="primary"
                    isSubmitButton={true}
                />
                <Button
                    innerText="Cancel"
                    buttonType="secundary"
                    onClickFunction={onClose}
                />
            </div>
        </form>
    );
}

export default CreateProjectForm;
