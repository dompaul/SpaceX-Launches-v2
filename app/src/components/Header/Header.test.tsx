import {
  getByTestId,
  render,
  RenderResult,
  fireEvent,
} from "@testing-library/react";
import { App } from "../App";
import LABEL from "../../constants/Labels";
import { LaunchContextMock } from "../../contexts/LaunchContext";

const testIds = {
  reloadButton: "reload-button-test",
};

describe("Header.tsx", () => {
  let wrapper: RenderResult;
  const mockList = jest.fn();

  describe("default", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchContextMock listLaunches={mockList}>
          <App />
        </LaunchContextMock>
      );
    });

    it("renders reload button component", () => {
      const reloadButton = getByTestId(wrapper.container, testIds.reloadButton);
      expect(reloadButton).toBeInTheDocument();
    });

    it("renders reload label", () => {
      const reloadButton = getByTestId(wrapper.container, testIds.reloadButton);
      expect(reloadButton).toHaveTextContent(LABEL.RELOAD);
    });
  });

  describe("on click", () => {
    beforeEach(() => {
      wrapper = render(
        <LaunchContextMock
          loaded={true}
          listLaunches={mockList}
        >
          <App />
        </LaunchContextMock>
      );
    });

    it("reload button", () => {
      fireEvent.click(getByTestId(wrapper.container, testIds.reloadButton));
      expect(mockList).toHaveBeenCalled();
    });
  });
});
