import renderer from "react-test-renderer";
import App from "./App";

// Snapshot test
test("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
