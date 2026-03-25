import { useParams } from "react-router-dom";

function OpenProject() {
    const { id } = useParams();

    return (
        <div>
            <p>Opened Project: {id}</p>
        </div>
    );
}

export default OpenProject;
