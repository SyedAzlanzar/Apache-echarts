import { SideNavAnalyticsdata, SideNavdata } from "src/mocks/data";
import DisplaySideNav from "./DisplaySideNav";

const MobileNav = () => {
  return (
    <div className="mobile-navbar-container">
      <h4 className="base-heading">Net Change</h4>
      {SideNavdata.map((item) => (
        <DisplaySideNav
          heading={item.name}
          value={item.value}
          key={item.name}
        />
      ))}
      <h4
        className="base-heading"
        style={{ borderBottom: "1px solid #0000001a" }}
      >
        Legend
      </h4>
      <h5>Movement Summary</h5>
      {SideNavAnalyticsdata.map((item) => (
        <DisplaySideNav
          heading={item.name}
          ifBullets={!!item.color}
          color={item.color}
          key={item.name}
        />
      ))}
    </div>
  );
};

export default MobileNav;
