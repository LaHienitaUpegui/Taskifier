import "../styles/button.css";

type ButtonProps = {
    innerText: string;
    buttonType: "primary" | "secundary";
    onClickFunction?: () => void;
    isSubmitButton?: boolean;
};

function Button({
    innerText,
    buttonType,
    onClickFunction,
    isSubmitButton,
}: ButtonProps) {
    return (
        <button
            className={buttonType}
            onClick={onClickFunction}
            type={isSubmitButton ? "submit" : "button"}
        >
            {innerText}
        </button>
    );
}

export default Button;
