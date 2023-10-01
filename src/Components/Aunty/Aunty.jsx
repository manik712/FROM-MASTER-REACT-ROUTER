import { useContext } from "react";
import Cosin from "../Cosin/Cosin";
import { AssetContext, MoneyContext } from "../GrandPa/GrandPa";


const Aunty = () => {
  const[money, setMoney] = useContext(MoneyContext)
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
       <p>Money:{money}</p>
      <button className="bg-teal-400 py-1 px-3 text-white rounded-lg" onClick={() =>setMoney(money+1000)}>give 100 tk</button>
    </div>
  );
};

export default Aunty;