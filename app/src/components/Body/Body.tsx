import React from "react";
import CONSTANTS from "../../constants/Config";
import LABEL from "../../constants/Labels";
import LaunchList from "../LanuchList/LaunchList";
import Button from "../Button/Button";
import Select from "../Select/Select";
import { useLaunchContext } from "../../contexts/LaunchContext";

const Body: React.FC = () => {
  const {
    loaded,
    error,
    filter,
    setSort,
    sort,
    items,
    years,
  } = useLaunchContext();

  return (
    <div className="app__body">
      <div className="app__image-container">
        <img
          src={CONSTANTS.SPACE_X_IMAGE}
          srcSet={CONSTANTS.SPACE_X_RETINA_IMAGES}
          className="app__main-image"
          alt="Launch Home"
        />
      </div>
      <div className="app__launches">
        <div className="app__filters">
          <Select
            classes="select"
            label={LABEL.FILTER_BY_YEAR}
            loaded={loaded}
            error={error}
            years={years}
            allowDisabledState={true}
          />
          <Button
            filter={filter}
            loaded={loaded}
            error={error}
            allowDisabledState={true}
            classes="button button--sort"
            onClick={() => setSort(!sort)}
            label={sort ? LABEL.ASC : LABEL.DESC}
          />
        </div>
        <LaunchList
          items={items}
          loaded={loaded}
          error={error}
          filter={filter}
          sort={sort}
        />
      </div>
    </div>
  );
};

export default Body;
