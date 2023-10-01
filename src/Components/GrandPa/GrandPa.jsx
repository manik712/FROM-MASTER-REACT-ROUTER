import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import  "./GrandPa.css"

const AssetContext = createContext("gold")
const GrandPa = () => {
  const asset = "diamond"
  return (
    <div className="GrandPa flex">
      <h2>GrandPa</h2>
      <AssetContext.Provider value="gold">
      <section>
       <Dad asset={asset}></Dad>
       <Uncle></Uncle>
       <Aunty></Aunty>
       </section>
      </AssetContext.Provider>
    </div>
  );
};

export default GrandPa;





// 1.create a context and add export it.
//2.add the provider for the context WITH the value.


