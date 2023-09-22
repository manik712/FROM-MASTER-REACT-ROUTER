import { useState } from "react";

const useInputState = (defaltValue=null) =>{

  const [value ,setValue] = useState(defaltValue);


const onChange = e =>{
  setValue(e.target.value);
}

// const handleChange = e =>{
//   setValue(e.target.value);
// }



// return[value,handleChange];

return{
  value,
  onChange
}


}


export default useInputState;