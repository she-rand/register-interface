import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import Register from './assets/components/Register'

function App() {
  library.add(faLinkedin,faGithub,faFacebook)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [color, setColor] = useState("text-primary");


  const handleOnChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
}
const handleOnChangePassword = (e) => {
    setPassword(e.target.value)
}
const handleOnChangeConfirmation = (e) => {
  setConfirmation(e.target.value)
}
const handleOnChangeEmail = (e) => {
  setEmail(e.target.value)
}
// Define our regular expression.
var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const handleSubmit = (e) => { 
  e.preventDefault();
  if(!name.trim()||!password.trim()||!confirmation.trim()||!email.trim()){
      alert("Llene los campos")
      setMensaje("Complete all the fields")
      setColor("text-danger")
      return
  }
  if(password!=confirmation){
      alert("Password confirmation does not match")
      setMensaje("Password confirmation does not match")
      setColor("text-danger")
  }if(!validEmail.test(email)){
    alert("Email is invalid, skip form submission")
    setMensaje("Email is invalid, skip form submission")
    setColor("text-danger")
}else{
      alert("Succesful")
      setMensaje("Succesful")
      setColor("text-success")
  }

  console.log({user,password})
};
  return (
    <>
    <Register actionSubmit={handleSubmit} actionName={handleOnChangeName} actionEmail={handleOnChangeEmail} actionPassword={handleOnChangePassword} actionConfirmation={handleOnChangeConfirmation} mensaje={mensaje} color={color}></Register>
    
    
    </>
  )
}

export default App
