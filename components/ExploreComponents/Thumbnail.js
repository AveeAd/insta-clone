import classes from "./thumbnail.module.css";
import { useState } from "react";

const Thumbnail = ({ imglink, colspan }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div className={`${classes.thumbnail} col-span-${colspan}`}>
      <img src={imglink} alt="" />
      <div
        className={`${classes.overlay} flex items-center justify-center space-x-10 text-white`}
        onMouseOver={(e) => {
          setHoverState(true);
        }}
        onMouseOut={(e) => {
          setHoverState(false);
        }}
      >
        <p className={`${hoverState ? "" : "hidden"}`}>1234</p>
        <p className={`${hoverState ? "" : "hidden"}`}>567</p>
      </div>
    </div>
  );
};

export default Thumbnail;
