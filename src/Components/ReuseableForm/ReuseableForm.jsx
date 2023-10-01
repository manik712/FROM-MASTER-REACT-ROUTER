/* eslint-disable react/prop-types */


const ReuseableForm = ({fromTitle, handleSubmit , SubmitBtnText='Submit',
children}) => {

  // const handleSubmit = e =>{
  //   e.preventDefault();
 const handleLocalSubmit = e =>{
   e.preventDefault();
   const data ={
    name:e.target.name.value,
    email:e.target.email.value,
    password:e.target.password.value
   }
   handleSubmit(data);
 }
  

  
  return (
    <div>
      {/* <h2>{fromTitle}</h2> */}
      {children}
        <form onSubmit={handleLocalSubmit}>
          <input type="text"  name="name" className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none"/>
         <br />
         <input type="email" name="email" id="" />
          <br />
         <input type="password" name="password" id="" />
           <br />
         <input type="submit" value={SubmitBtnText} />
        </form>
    </div>
  );
};

export default ReuseableForm ;



