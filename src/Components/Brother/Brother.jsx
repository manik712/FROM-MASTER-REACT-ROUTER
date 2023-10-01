import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";


const Brother = () => {
  const [money,setMoney] = useContext(MoneyContext)
  return (
    <div>
       <h2>my brother</h2>
        <h4>{money}</h4>
    </div>
  );
};

export default Brother;