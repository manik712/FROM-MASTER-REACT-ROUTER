import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import  "./GrandPa.css"

const GrandPa = () => {
  const asset = "diamond"
  return (
    <div className="GrandPa flex">
      <h2>GrandPa</h2>
       <section>
       <Dad asset={asset}></Dad>
       <Uncle></Uncle>
       <Aunty></Aunty>
       </section>
    </div>
  );
};

export default GrandPa;