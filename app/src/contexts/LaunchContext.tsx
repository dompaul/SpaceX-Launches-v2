import React from "react";
import { LaunchOption } from "../models/LaunchModel";
import { getLaunchesAPI } from "../api/getLaunches";
import { getYears } from "../utils/getYears";

export interface LaunchContextProps {
  listLaunches: Function;
  items: LaunchOption[];
  loaded: boolean;
  error: boolean;
  sort: boolean;
  setSort: Function;
  years: number[];
  filter: string;
  setFilter: Function;
}

export const launchContextDefaults: LaunchContextProps = {
  listLaunches: Function,
  items: [],
  loaded: false,
  error: false,
  sort: false,
  setSort: Function,
  years: [],
  filter: "",
  setFilter: Function,
};

export const LaunchContext = React.createContext<LaunchContextProps>(
  launchContextDefaults
);
export const useLaunchContext = (): LaunchContextProps =>
  React.useContext(LaunchContext);

export const LaunchProvider: React.FC = ({ children }) => {
  const [items, setItems] = React.useState<LaunchOption[]>([]);
  const [loaded, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [sort, setSort] = React.useState<boolean>(false);
  const [years, setYears] = React.useState<number[]>([]);
  const [filter, setFilter] = React.useState<string>("");

  return (
    <LaunchContext.Provider
      value={{
        listLaunches: React.useCallback(async () => {
          try {
            setLoading(false);
            setError(false);
            setFilter("");
            const response = await getLaunchesAPI();
            setItems(response);
            setYears(getYears(response));
            setLoading(true);
          } catch {
            setError(true);
          }
        }, []),
        items,
        loaded,
        error,
        sort,
        setSort,
        years,
        filter,
        setFilter,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
