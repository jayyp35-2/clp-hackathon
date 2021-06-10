import '../css/mainpage.css';
import search from "../images/search.svg";
import profile from "../images/profile.svg";
import chat from "../images/chat.svg";
import heart from "../images/heart.svg";
import home from "../images/home.svg";
import account from "../images/account.svg";
import gridItem from "../images/gridItem.svg";


function MainPage(props) {
  return (
    <div className="mainPage">
        <div className="mainPage-div1">
          <img src={profile} alt=""/>
          <p>Ritika Roy</p>
        </div>
        <div className="mainPage-div2"> 
            <img src={search} alt=""/>
            <input type ="text" placeholder="Search for services" className="mainPage-search"/>
        </div>
        <button className="mainPage-btn1">
        Sell your time
        </button>
        <button className="mainPage-btn2">
        Buy time
        </button>
        <div className="mainPage-content">
          <div className="mainPage-contentText">
            <p className="mainPage-contentText1">Services</p>
            <p className="mainPage-contentText2">See all</p>
          </div>
          <div className="mainPage-contentGrid">
              <img src={gridItem} alt=""/>
              <img src={gridItem} alt=""/>
              <img src={gridItem} alt=""/>
              
          </div>
        </div>
        <div className="mainPage-footer">
          <img src={home} alt=""/>
          <img src={heart} alt=""/>
          <img src={chat} alt=""/>
          <img src={account} alt=""/>
        </div>
    </div>
  );
}

export default MainPage;
