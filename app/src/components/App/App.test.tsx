import { render } from "@testing-library/react";
import { App } from "./App";

describe("App.tsx", () => {
  it("renders with default snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
