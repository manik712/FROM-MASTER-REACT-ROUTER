import { useState } from "react";


const StateFullname = () => {
  const [email, setEmail] = useState(null);
  const [password ,setPassword] = useState(null);
  const [name ,SetName] = useState('Manik');
  const [error,setError] = useState('')

  const handleSubmit = e =>{
    e.preventDefault();
    if(password.length < 6){
      setError('password must be 6 characters or longer')
    }else{
      setError('');
    }
    console.log(email,password,name);
  }

  const handleChangePass = e =>{
      console.log(e.target.value);
      setPassword(e.target.value);
      // console.log(password);

  }
  const handleChange = e =>{
    
    // console.log(e.target.value);
    setEmail(e.target.value);
  }

const handleNameChange = e =>{

SetName(e.target.value)
}


  return (
    <div>
      
      <form className="space-y-3" onSubmit={handleSubmit}>
          <input type="text" onChange={handleNameChange}  placeholder="name" name="name" value={name} className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none"  />
         <br />
         <input type="email" name="email"   className='bg-red-500 text-white px-8 py-2 rounded-lg decoration-none' id="" />
           <br />
           <input onChange={handleChangePass} placeholder="password" required  type="password" name="password"  className='bg-red-500 text-white px-8 py-2 rounded-lg decoration-none' id="" />
           <br />
           <input   onChange={handleChange}  placeholder="email"  className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none"  type="email" name="email" id="" />
           <br />
         <input type="submit" value="Submit" />
         {
          error && <p>{error}</p>
         }
        </form>



    </div>
  );
};

export default StateFullname;