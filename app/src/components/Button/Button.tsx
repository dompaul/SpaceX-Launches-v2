import React from "react";
import cx from "classnames";

interface ButtonProps {
  classes: string;
  label: string;
  filter?: string;
  loaded: boolean;
  error: boolean;
  allowDisabledState: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  classes,
  label,
  allowDisabledState,
  error,
  onClick,
}) => {
  const buttonClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });
  return (
    <button onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
