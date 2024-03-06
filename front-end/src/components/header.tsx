import { Link } from "react-router-dom"
import { FaSearch,FaShoppingBag,FaSignInAlt,FaSignOutAlt,FaUser } from "react-icons/fa"
import { useState } from "react";

function Header() {

  const user = { _id: "3455",Role: ""}; 
  const [isOpen,setIsOpen] = useState<boolean>(false)

  return <nav className="header">
    <Link to={"/"} onClick={() => setIsOpen(false)}> Home </Link>
    <Link to={"/search"} onClick={() => setIsOpen(false)}> <FaSearch /> </Link>
    <Link to={"/cart"} onClick={() => setIsOpen(false)}> <FaShoppingBag />    </Link>

    {
        user._id ? (
            <>
                <button onClick={() => setIsOpen(prev => !prev)}>
                    <FaUser />
                </button>
                <dialog open={isOpen}>
                    <div>
                        {user.Role === "admin" && (
                            <Link to="/admin" onClick={() => setIsOpen(false)}>Admin</Link>
                        )}
                        <Link onClick={() => setIsOpen(false)} to="/orders" >Orders</Link>
                            <button><FaSignOutAlt /></button>
                    </div>
                </dialog>
            </>
        ) : (
            <Link to={"/login"}> <FaSignInAlt /></Link>
        )
    }
  </nav>
}

export default Header