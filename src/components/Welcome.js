import '../css/welcome.css';
import {withRouter} from "react-router-dom"
import Buymytime from '../images/buymytime.png'

function Welcome(props) {
  return (
    <div className="welcome">
        <img className="welcome__logo" src={Buymytime} alt=""/>
        <div className="welcome__heading">
          Welcome to Buy my time
        </div>
        <div className="welcome__text">
          A unified platform where you can sell you time and buy the time of others
        </div>
        <div 
        className="welcome__register brownButton"  
        onClick={()=>{props.history.push('/register')}}
        >
          Register
        </div>
        <div className="welcome__login brownButton">Login</div>
    </div>
  );
}

export default withRouter(Welcome);
