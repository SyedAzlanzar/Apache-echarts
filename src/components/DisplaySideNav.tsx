import { MdCircle } from "react-icons/md";
import { DisplaySideNavProps } from "src/types/interfaces/SideNav";

const style ={
    justifyContent: "unset",
    gap:"10px"
}

const DisplaySideNav = ({
  heading,
  value,
  ifBullets,
  color
}: DisplaySideNavProps) => {
  return (
    <div className="display-side-nav-parent">
      
      {ifBullets ? (
        <div className="display-side-nav-child" style={style} >
          <MdCircle color={color} size={10} />
          <p >{heading}</p>
        </div>
      ):<div className="display-side-nav-child">
      <p>{heading}</p>
      <p>{value}</p>
    </div>}
    </div>
  );
};

export default DisplaySideNav;
