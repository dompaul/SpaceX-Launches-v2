import React from "react";
import { LaunchItem } from "../LaunchItem";
import { LaunchOption } from "../../models/LaunchModel";
import LABEL from "../../constants/Labels";

interface LaunchListProps {
  items: LaunchOption[];
  filter: string;
  loaded: boolean;
  error: boolean;
  sort: boolean;
}

export const LaunchList: React.FC<LaunchListProps> = ({
  items,
  filter,
  loaded,
  error,
  sort,
}) => {
  let filteredItems = [...items];

  if (error) {
    return <span>{LABEL.ERROR}</span>;
  }

  if (!loaded) {
    return <span>{LABEL.LOADING}</span>;
  }

  if (filter !== "") {
    filteredItems = [...items].filter((item: LaunchOption) => {
      const year = Number(new Date(item.launch_date_utc).getFullYear());
      return year === Number(filter);
    });
  }

  const itemsCopy = filteredItems.sort((a, b) => {
    const x = Number(new Date(a.launch_date_utc).getTime());
    const y = Number(new Date(b.launch_date_utc).getTime());
    return sort ? y - x : x - y;
  });

  return (
    <ul className="launch-list">
      {itemsCopy.map((item, index) => {
        return <LaunchItem key={index} item={item} index={index} />;
      })}
    </ul>
  );
};
