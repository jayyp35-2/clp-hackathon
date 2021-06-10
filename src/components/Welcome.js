import '../css/welcome.css';
import {withRouter} from "react-router-dom"
function Welcome(props) {
  return (
    <div className="welcome" onClick={()=>{props.history.push('/register')}}>
        Welcome
    </div>
  );
}

export default withRouter(Welcome);
