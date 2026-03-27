import type React from "react";
import "../styles/button.css";

type ButtonProps = {
    innerText?: string;
    buttonType: "primary" | "secondary" | "danger" | "blue-button";
    onClickFunction?: () => void;
    isSubmitButton?: boolean;
    icon?: React.ReactNode | null;
    haveIcon?: boolean;
};

function Button({
    innerText,
    buttonType,
    onClickFunction,
    isSubmitButton,
    icon = null,
    haveIcon = false,
}: ButtonProps) {
    return (
        <button
            className={buttonType}
            onClick={onClickFunction}
            type={isSubmitButton ? "submit" : "button"}
        >
            {haveIcon && icon}
            {innerText}
        </button>
    );
}

export default Button;
