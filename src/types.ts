export type Project = {
    id: number;
    name: string;
    description: string;
    creationDate: string;
    status: "active" | "completed";
    tasks: Task[];
};

export type Task = {
    id: number;
    title: string;
    status: "pending" | "completed";
};
