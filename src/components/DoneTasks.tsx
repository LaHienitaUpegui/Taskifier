import "../styles/DoneTasks.css";
import type { Task } from "../types";

type DoneTasksProps = {
    doneTasks: Task[];
};

function DoneTasks({ doneTasks }: DoneTasksProps) {
    return (
        <div className="done-tasks">
            {doneTasks.length === 0 ? (
                <div className="done-tasks__empty">
                    <small className="done-tasks__message">
                        You have no completed tasks. Keep going!
                    </small>
                </div>
            ) : (
                <>
                    {doneTasks.map((task) => (
                        <div key={task.id} className="done-tasks__task">
                            <p className="done-tasks__task-title">
                                {task.title}
                            </p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default DoneTasks;
