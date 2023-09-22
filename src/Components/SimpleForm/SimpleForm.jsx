

const SimpleForm = () => {
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text"  name="name" className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none"  />
         <br />
         <input type="email" name="email" id="" />
          <br />
         <input type="password" name="password" id="" />
           <br />
         <input type="submit" value="Submit" />
        </form>
    </div>
  );
};

export default SimpleForm;