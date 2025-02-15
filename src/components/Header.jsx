import { Link } from "react-router-dom";
let Header = () =>{
    return(
        <div className="bg-black text-white flex flex-wrap justify-around h-18  shadow-slate-600 shadow-lg">
            <img src="https://tse3.mm.bing.net/th?id=OIP.Vc2uO4I4bGdncIiA5usFOwHaHa&pid=Api&P=0&h=180" className="h-16 w-18 mt-1"/>
            <Link to="/home"><p className="mt-6 cursor-pointer">HOME</p></Link>
            <Link to="/home"><p className="mt-6 cursor-pointer">ABOUT</p></Link>
            <Link to="/home"><p className="mt-6 cursor-pointer">CONTACT</p></Link>
            <Link to="/home"><p className="mt-6 cursor-pointer">SERVICE</p></Link>
            <Link to="/home"><p className="mt-6 cursor-pointer">LOGIN</p></Link>
        </div>
    )
}
export default Header;