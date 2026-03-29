import type React from "react";
import "../styles/button.css";

type ButtonProps = {
    innerText?: string;
    buttonType:
        | "primary"
        | "secondary"
        | "danger"
        | "blue-button"
        | "orange-button";
    onClickFunction?: () => void;
    isSubmitButton?: boolean;
    icon?: React.ReactNode | null;
    haveIcon?: boolean;
    customClassName?: string;
};

function Button({
    innerText,
    buttonType,
    onClickFunction,
    isSubmitButton,
    icon = null,
    haveIcon = false,
    customClassName = "",
}: ButtonProps) {
    return (
        <button
            className={`${buttonType} ${customClassName}`}
            onClick={onClickFunction}
            type={isSubmitButton ? "submit" : "button"}
        >
            {haveIcon && icon}
            {innerText}
        </button>
    );
}

export default Button;
