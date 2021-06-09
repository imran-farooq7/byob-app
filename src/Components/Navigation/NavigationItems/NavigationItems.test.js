import { configure, shallow } from "enzyme";
import adapter from "enzyme-adapter-react-16";
import navigationItem from "./NavigationItem/NavigationItem";
import NavigationItems from "./NavigationItems";

configure({ adapter: new adapter() });

describe("<NavigatioItems />", () => {
  it("should render two <NavigatioItems /> elements if not authenticated", () => {
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(navigationItem)).toHaveLength(2);
  });
  it("should render three <NavigatioItems /> elements if authenticated", () => {
    const wrapper = shallow(<NavigationItems isAuthenticated />);
    expect(wrapper.find(navigationItem)).toHaveLength(3);
  });
});
