import React from "react";
import cx from "classnames";
import { useLaunchContext } from "../../contexts/LaunchContext";

interface SelectProps {
  classes: string;
  loaded: boolean;
  error: boolean;
  label: string;
  years: number[];
  allowDisabledState: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  classes,
  years,
  error,
  allowDisabledState,
}) => {
  const { setFilter, filter } = useLaunchContext();
  const selectClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });
  return (
    <select
      name={label}
      className={selectClasses}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
      }}
      value={filter}
    >
      <option value="">{label}</option>
      {years.map((year, index) => {
        return (
          <option key={index} value={year}>
            {year}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
