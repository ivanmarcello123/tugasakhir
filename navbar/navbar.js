import React from "react";
import { Link} from "react-router-dom";

const Navbar = ()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to= '/'>Home</Link>
                    </li>
                    <li>
                        <Link to= '/about'>Tentang kami</Link>
                    </li>
                    <li>
                        <Link to= '/contact'>Kontak Kami</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}
export default Navbar