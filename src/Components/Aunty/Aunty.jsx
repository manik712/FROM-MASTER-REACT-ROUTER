import { useContext } from "react";
import Cosin from "../Cosin/Cosin";
import { AssetContext } from "../GrandPa/GrandPa";


const Aunty = () => {
  const gift = useContext(AssetContext)
  return (
    <div>
       <h2>Aunty</h2>
       <section className="flex">
         <Cosin name={'roni'}></Cosin>
         <Cosin name={'laboni'}></Cosin>
         <Cosin name={'laltu'}></Cosin>
         <p>{gift}</p>
       </section>
    </div>
  );
};

export default Aunty;