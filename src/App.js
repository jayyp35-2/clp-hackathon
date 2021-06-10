import './App.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Otp from "./components/Otp";
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
					<Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/register" component={Register}/>
              <Route exact path="/otp" component={Otp}/>
              <Route exact path="/mainpage" component={MainPage}/>
					    <Route render={() => <Redirect to="/" />} />
					</Switch>
				</BrowserRouter>
    </div>
  );
}

export default App;
