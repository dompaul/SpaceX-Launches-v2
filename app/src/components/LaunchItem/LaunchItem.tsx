import React from "react";
import Moment from "react-moment";
import { LaunchOption } from "../../models/LaunchModel";

interface LaunchItemProps {
  item: LaunchOption;
  index: number;
}

const LaunchItem: React.FC<LaunchItemProps> = ({ item, index }) => {
  return (
    <li key={index} className="launch-item">
      <div className="launch-item__mission-content">
        <span className="launch-item__number">{`#${item.flight_number}`}</span>
        <span className="launch-item__label">{`${item.mission_name}`}</span>
      </div>
      <div className="launch-item__meta-info">
        <span className="launch-item__date">
          <Moment format="Do MMMM YYYY" date={item.launch_date_utc} />
        </span>
        <span className="launch-item__rocket">{item.rocket.rocket_name}</span>
      </div>
    </li>
  );
};

export default LaunchItem;
