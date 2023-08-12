import React from "react";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

function Button({
  primary = false,
  size = "medium",
  backgroundColor = "transparent",
  label,
  ...props
}: ButtonProps) {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
    >
      {label}
      <style jsx>
        {`
          button {
            background-color: ${backgroundColor};
          }
        `}
      </style>
    </button>
  );
}

export default Button;
