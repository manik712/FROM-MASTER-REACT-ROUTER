
import './App.css'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import HookFrom from './Components/HookForn/HookFrom'
// import RefForm from './Components/RefForm/RefForm'
// import StateFullname from './Components/StateFullname/StateFullname'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
const handleUpdateProfile = data =>{

  console.log('sing up data', data);
}

  const handleSingUpSubmit = data=>{
    console.log('update profile' , data);
  }

  
  return (
    <>
    
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullname></StateFullname>
       */}
       {/* <RefForm></RefForm> */}
       {/* <HookFrom></HookFrom>*/}

        <ReuseableForm fromTitle={'Sing Up'} handleSubmit={handleSingUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>please sign up</p>
          </div>
        </ReuseableForm>
        <ReuseableForm fromTitle={'Profile Update'} handleSubmit={handleUpdateProfile} SubmitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile update</p>
          </div>
        </ReuseableForm>
    </>
  )
}

export default App
