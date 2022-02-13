import renderer from "react-test-renderer";
import Search from "./Search";

test("renders correctly", () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("contains relevant inputs", () => {
  const tree = renderer.create(<Search />).toJSON();
  const inputElement = tree.children[0].children.filter(
    (e) => e.type === "input"
  )[0];
  expect(inputElement.props.placeholder).toBe("Search");
});
