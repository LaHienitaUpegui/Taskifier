import "../styles/button.css";

type ButtonProps = {
    innerText: string;
    buttonType: "primary" | "secondary";
    onClickFunction?: () => void;
};

function Button({ innerText, buttonType, onClickFunction }: ButtonProps) {
    return (
        <button className={buttonType} onClick={onClickFunction}>
            {innerText}
        </button>
    );
}

export default Button;
