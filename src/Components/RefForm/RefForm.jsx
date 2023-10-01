import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
    
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);

  };
  return (
    <div>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={nameRef}
          name="name"
          placeholder="name"
          className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none"
        />
        <br />
        <input
          type="email"
          ref={emailRef}
          placeholder="email"
          defaultValue={"maniks@fssdfg.com"}
          className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none"
          name="email"
          id=""
        />
        <br />
        <input
          type="password"
          ref={passRef}
          name="password"
          placeholder="password"
          className="bg-red-500 text-white px-8 py-2 rounded-lg decoration-none"
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
