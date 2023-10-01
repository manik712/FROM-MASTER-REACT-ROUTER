import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000)
const GrandPa = () => {
  const[money ,setMoney] = useState(1000)
  const asset = "diamond";
  return (
    <div className="GrandPa flex">
      <h2>GrandPa</h2>
      <MoneyContext.Provider value={[money ,setMoney]}>
      <AssetContext.Provider value="gold">
        <section>
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
      </MoneyContext.Provider>

      <p>money:{money}</p>
    </div>
  );
};

export default GrandPa;

// 1.create a context and add export it.
//2.add the provider for the context WITH the value.value could be anything.
//3. use context to access the value in the context api.
