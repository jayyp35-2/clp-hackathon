import '../css/otp.css';
import OtpInput from 'react-otp-input';
import BackLogo from '../images/back.svg'
import { useState } from 'react';

const OtpContainerStyle = {
  justifyContent:"center"
}
const OtpInputStyle ={
  border:"none",
  borderBottom:"2px solid #BE6414",
  width:"55px",
  marginRight:"15px",
  fontWeight: "600",
  fontSize: "25px",
  lineHeight: "37px",
  color:"#BE6414"
}

function Otp(props) {

  const[otp,setOtp] = useState('')

  const handleChange = (otp) => {
    setOtp(otp)
  }

  const submitOtp = () => {
    console.log("submit",otp);

    if(otp == 1111)
     alert("correct Otp")
  }
  return (
    <div className="Otp">
        <div className="Otp__Head" onClick={()=>props.history.push('/register')}><img className="BackButton" src={BackLogo} alt=""/>Back</div>
        <div className="Otp__Heading">Verify Otp</div>
        <div className="Otp__Text">Please enter the 4 digit OTP sent to</div>
        <div className="Otp__Number">+91 8383838383</div>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          containerStyle={OtpContainerStyle}
          inputStyle={OtpInputStyle}
        ></OtpInput>
        <div className="Otp__Resend">Resend Code</div>
        <div className="brownButton"
        onClick={()=>submitOtp()}>Confirm</div>
    </div>
  );
}

export default Otp;
