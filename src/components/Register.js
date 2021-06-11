import { useState } from 'react';
import '../css/register.css';
import BackLogo from '../images/back.svg'
function Register(props) {
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  
  let nameErrorMessage = document.getElementById('name-error');
  let phoneErrorMessage = document.getElementById('phone-error');

  function resetName(){
    if(nameErrorMessage)
      nameErrorMessage.style.opacity = 0;
  }

  function resetPhoneError(){
    if(phoneErrorMessage)
      phoneErrorMessage.style.opacity = 0;
  }
  function handleSubmit(){
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[-+]?[0-9]+$/;
    let nameCorrect = false;
    let phoneCorrect = false;

    if(!name.match(letters)){
      if(nameErrorMessage)
      nameErrorMessage.style.opacity = 1;
    } else {
      nameCorrect = true;
    }

    if(!phone.match(numbers) || phone.length !== 10){
      if(phoneErrorMessage)
      phoneErrorMessage.style.opacity = 1;
    } else {
      phoneCorrect = true;
    }
    
    if(nameCorrect&&phoneCorrect)
      props.history.push('/otp')
    else
    return
  }

  return (
    <div className="Register">
        <div className="Register__Head" onClick={()=> props.history.push('/')}><img className="BackButton" src={BackLogo} alt=""/>Back</div>
        <div className="Register__Heading">Register</div>
        <input 
        className="login-input" 
        placeholder="Full Name" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        onClick={()=>resetName()}
        ></input>
        <div className="error" id="name-error">Invalid Name</div>
        <input 
        className="login-input" 
        placeholder="Phone Number" 
        value={phone}
        onChange={(e)=> setPhone(e.target.value)}
        onClick={()=>resetPhoneError()}></input>
        <div className="error" id="phone-error">Invalid Phone Number</div>
        <div 
        className="welcome__register brownButton" 
        onClick={()=>{
          handleSubmit();
        }
        }
        >
        Next
        </div>
    </div>
  );
}

export default Register;
