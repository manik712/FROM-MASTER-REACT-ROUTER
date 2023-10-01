import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = ({asset}) => {
  return (
    <div className="flex">
       <h2>Dad</h2>
       <MySelf asset={asset}></MySelf>
       <Brother></Brother>
       <Sister></Sister>
    </div>
  );
};

export default Dad;