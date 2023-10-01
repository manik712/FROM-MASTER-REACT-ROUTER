import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Cosin = ({name}) => {
  const gift = useContext(AssetContext)
  return (
    <div>
        <h2>Cosin</h2>
        <p>{name}</p>
        <p>{gift}</p>

    </div>
  );
};

export default Cosin;