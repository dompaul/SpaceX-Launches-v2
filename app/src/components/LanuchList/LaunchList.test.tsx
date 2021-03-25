import { getByTestId, render, RenderResult } from "@testing-library/react";
import LABEL from "../../constants/Labels";
import { LaunchList } from "./LaunchList";

const testIds = {
  error: "error-state-test",
  load: "loading-state-test",
  launchList: "launch-list-test",
};

const mockLaunchList = [
  {
    flight_number: "1",
    mission_name: "FalconSat",
    launch_date_utc: "2006-03-24T22:30:00.000Z",
    rocket: {
      rocket_name: "Falcon 1",
    },
  },
  {
    flight_number: "2",
    mission_name: "RazakSat",
    launch_date_utc: "2009-07-13T03:35:00.000Z",
    rocket: {
      rocket_name: "Falcon 1",
    },
  },
];

describe("LaunchList.tsx", () => {
  let wrapper: RenderResult;

  describe("error", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchList
          error={true}
          items={mockLaunchList}
          filter="2009"
          loaded={true}
          sort={true}
        ></LaunchList>
      );
    });

    it("api fails", () => {
      const message = getByTestId(wrapper.container, testIds.error);
      expect(message).toHaveTextContent(LABEL.ERROR);
    });
  });

  describe("load", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchList
          error={false}
          items={mockLaunchList}
          filter="2009"
          loaded={false}
          sort={true}
        ></LaunchList>
      );
    });

    it("api still loading", () => {
      const load = getByTestId(wrapper.container, testIds.load);
      expect(load).toHaveTextContent(LABEL.LOADING);
    });
  });

  describe("filter", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchList
          error={false}
          items={mockLaunchList}
          filter="2009"
          loaded={true}
          sort={true}
          testId={testIds.launchList}
        ></LaunchList>
      );
    });

    it("launch list is filtered", () => {
      const launchList = getByTestId(wrapper.container, testIds.launchList);
      expect(launchList.childElementCount).toEqual(1);
    });
  });

  describe("sort ascending order", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchList
          error={false}
          items={mockLaunchList}
          filter=""
          loaded={true}
          sort={false}
          testId={testIds.launchList}
        ></LaunchList>
      );
    });

    it("launch list is sorted ascending order", () => {
      expect(
        getByTestId(wrapper.container, testIds.launchList)
      ).toMatchSnapshot();
    });
  });

  describe("sort descending order", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchList
          error={false}
          items={mockLaunchList}
          filter=""
          loaded={true}
          sort={true}
          testId={testIds.launchList}
        ></LaunchList>
      );
    });

    it("launch list is sorted descending order", () => {
      expect(
        getByTestId(wrapper.container, testIds.launchList)
      ).toMatchSnapshot();
    });
  });
});
