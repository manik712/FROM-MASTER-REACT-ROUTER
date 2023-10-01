import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = () => {
  return (
    <div className="flex">
       <h2>Dad</h2>
       <MySelf></MySelf>
       <Brother></Brother>
       <Sister></Sister>
    </div>
  );
};

export default Dad;