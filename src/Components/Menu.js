import dp from "../assets/girl.jpg";
const Menu = () => {
    return (
        <div className = "flex">
           
            <img src= {dp}  alt="profile"/>
            <div className="center">HUSNARA SIDDIQUE</div>
            <div className="none">
            <div>π  Home </div>
            <br></br>
            <div>π· Deposits </div>
            <br></br>
            <div>π Offers</div>
            <br></br>
            <div>π° Payments</div>
            <br></br>
            <div>βΈοΈ Settings</div>
            <br></br>
            
            </div>
           
            
        </div>
    )
}
export default Menu;