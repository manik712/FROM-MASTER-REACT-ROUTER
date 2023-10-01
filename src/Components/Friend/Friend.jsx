import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Friend = () => {
  const gift1 = useContext(AssetContext)
  return (
    <div>
        <h1>{gift1}</h1>
    </div>
  );
};

export default Friend;