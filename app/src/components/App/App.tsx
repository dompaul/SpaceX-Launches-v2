import React from "react";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const App: React.FC = () => {
  const { listLaunches } = useLaunchContext();

  React.useEffect(() => {
    listLaunches();
  }, [listLaunches]);

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
