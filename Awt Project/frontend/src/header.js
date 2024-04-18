import { Link } from "react-router-dom";
import './header.css';
export default function Header(){
    return(
        <>
            <nav>
                    
                            <Link to="/">HOME<span></span></Link>
                            <Link to="/Login">LOGIN</Link>
                            <Link to="/signup">SIGN UP</Link>
                            <Link to="/booknow">BOOK NOW</Link>
                            <Link  to="/mybookings">MY BOOKINGS</Link>
            </nav>
        </>
    )
}
