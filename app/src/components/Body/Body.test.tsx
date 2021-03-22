import { getByTestId, render, RenderResult } from "@testing-library/react";
import { Body } from "./Body";
import LABEL from "../../constants/Labels";
import { LaunchContextMock } from "../../contexts/LaunchContext";

const testIds = {
  sortButton: "sort-button-test",
  filterButton: "filter-button-test",
  launchList: "launch-list-test",
  loading: "loading-state-test",
  error: "error-state-test",
};

describe("Body.tsx", () => {
  let wrapper: RenderResult;
  const mockList = jest.fn();
  const mockSort = jest.fn();

  describe("default", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchContextMock listLaunches={mockList}>
          <Body />
        </LaunchContextMock>
      );
    });

    it("renders with default snapshot", () => {
      expect(wrapper.container).toMatchSnapshot();
    });

    it("renders filter button component", () => {
      const filterButton = getByTestId(wrapper.container, testIds.filterButton);
      expect(filterButton).toBeInTheDocument();
    });

    it("renders sort button component", () => {
      const sortButton = getByTestId(wrapper.container, testIds.sortButton);
      expect(sortButton).toBeInTheDocument();
    });
  });

  describe("on load", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchContextMock listLaunches={mockList}>
          <Body />
        </LaunchContextMock>
      );
    });

    it("renders loading state", () => {
      const loadingMessage = getByTestId(wrapper.container, testIds.loading);
      expect(loadingMessage).toHaveTextContent(LABEL.LOADING);
    });
  });

  describe("on error", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchContextMock error={true} listLaunches={mockList}>
          <Body />
        </LaunchContextMock>
      );
    });

    it("renders error state", () => {
      const errorMessage = getByTestId(wrapper.container, testIds.error);
      expect(errorMessage).toHaveTextContent(LABEL.ERROR);
    });
  });

  describe("sort: descending order", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchContextMock
          setSort={mockSort}
          sort={false}
          loaded={true}
          listLaunches={mockList}
        >
          <Body />
        </LaunchContextMock>
      );
    });

    it("sorts list descending", () => {
      const sortButton = getByTestId(wrapper.container, testIds.sortButton);
      sortButton.click();
      expect(mockSort).toHaveBeenCalledTimes(1);
      expect(sortButton).toHaveTextContent(LABEL.DESC);
    });
  });

  describe("sort: ascending order", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchContextMock
          setSort={mockSort}
          sort={true}
          loaded={true}
          listLaunches={mockList}
        >
          <Body />
        </LaunchContextMock>
      );
    });

    it("sorts list ascending", () => {
      const sortButton = getByTestId(wrapper.container, testIds.sortButton);
      sortButton.click();
      expect(mockSort).toHaveBeenCalledTimes(1);
      expect(sortButton).toHaveTextContent(LABEL.ASC);
    });
  });
});
