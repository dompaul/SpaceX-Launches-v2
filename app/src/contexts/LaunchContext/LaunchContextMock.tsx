import React from "react";
import { LaunchOption } from "../../models/LaunchModel";
import { LaunchContext, launchContextDefaults } from "./LaunchContext";

export interface LaunchContextMockProps {
  listLaunches?: Function;
  items?: LaunchOption[];
  loaded?: boolean;
  error?: boolean;
  sort?: boolean;
  setSort?: Function;
  years?: number[];
  filter?: string;
  setFilter?: Function;
}

export const LaunchContextMock: React.FC<LaunchContextMockProps> = ({
  children,
  ...overrides
}) => {
  return (
    <LaunchContext.Provider value={{ ...launchContextDefaults, ...overrides }}>
      {children}
    </LaunchContext.Provider>
  );
};
