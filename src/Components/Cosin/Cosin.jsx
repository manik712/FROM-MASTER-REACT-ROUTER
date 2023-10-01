import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";
import Friend from "../Friend/Friend";


const Cosin = ({name}) => {
  const gift = useContext(AssetContext)
  return (
    <div>
        <h2>Cosin</h2>
        <p>{name}</p>
        <p>{gift}</p>
        {
          name === "laltu" && <Friend></Friend>
        }

    </div>
  );
};

export default Cosin;