import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Sister = () => {
  const gift = useContext(AssetContext)
  return (
    <div>
        <h2>my sis</h2>
        <h2>{gift}</h2>
    </div>
  );
};

export default Sister;