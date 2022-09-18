import dp from "../assets/girl.jpg";
const Menu = () => {
    return (
        <div className = "flex">
           
            <img src= {dp}  alt="profile"/>
            <div className="center">HUSNARA SIDDIQUE</div>
            <div className="none">
            <div>🏠 Home </div>
            <br></br>
            <div>💷 Deposits </div>
            <br></br>
            <div>🎁 Offers</div>
            <br></br>
            <div>💰 Payments</div>
            <br></br>
            <div>☸️ Settings</div>
            <br></br>
            
            </div>
           
            
        </div>
    )
}
export default Menu;