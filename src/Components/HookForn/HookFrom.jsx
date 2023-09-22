import useInputState from "../../useInPutState";


const HookFrom = () => {
  // const nameState =  useInputState('manik')
  const emailState =useInputState('ddfdf@hjfghf.gf')
  // const [name, handleNameChange] =  useInputState('manik')

  const handleSubmit = e =>{
    // console.log('form data', name);
    console.log('form data', emailState.valuegiut );
    e.preventDefault()
  }
  return (
    <div >
        <form  className="space-y-1" onSubmit={handleSubmit}>
          {/* <input type="text" value={name}  onChange={handleNameChange} name="name" className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none"  /> */}
         <br />
         <input {...emailState} type="email"  className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none" name="email" id="" />
          <br />
         <input type="password" className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none"  name="password" id="" />
           <br />
         <input type="submit"  className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none" value="Submit" />
        </form>

    </div>
  );
};

export default HookFrom;