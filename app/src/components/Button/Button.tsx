import React from "react";
import cx from "classnames";

interface ButtonProps {
  classes: string;
  label: string;
  filter?: string;
  loaded: boolean;
  error: boolean;
  testId: string;
  allowDisabledState: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  classes,
  testId,
  label,
  allowDisabledState,
  error,
  onClick,
}) => {
  const buttonClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });

  return (
    <button data-testid={testId} onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};
