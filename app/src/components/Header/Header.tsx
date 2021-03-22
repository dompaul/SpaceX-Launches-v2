import React from "react";
import CONSTANTS from "../../constants/Config";
import LABEL from "../../constants/Labels";
import { Button } from "../../components/Button";
import { useLaunchContext } from "../../contexts/LaunchContext/LaunchContext";

export const Header: React.FC = () => {
  const { listLaunches, loaded, error, filter } = useLaunchContext();
  return (
    <header className="app__header">
      <div className="app__logo">
        <img src={CONSTANTS.LOGO} className="app__logo-image" alt="SpaceX" />
        <span className="app__logo-txt">{LABEL.LAUNCHES}</span>
      </div>
      <Button
        filter={filter}
        loaded={loaded}
        error={error}
        onClick={() => listLaunches()}
        classes="button button--reload"
        label={LABEL.RELOAD}
        allowDisabledState={false}
      />
    </header>
  );
};
