import logo from "../starter-code/assets/shared/logo.svg"
import { Link } from "react-router-dom"
import { CiMenuBurger } from "react-icons/ci";
export function Header() {

    const handleClick = () => {
        const navbar = document.querySelector(".navbar");
        const listItems = document.querySelectorAll(".list-item")
        
        
        navbar.classList.toggle("open")
         listItems.forEach(item => item.addEventListener("click",()=> navbar.classList.remove("open")))        
         }
    
    return (
        <>
            <header className="header lg:flex-row flex items-center justify-between w-full">
                <div >
                    <Link to="/">
                        <img className="image" src={logo} alt="space tourism" title="Space Tourism" />
                    </Link>
                </div>
                <nav className="navbar open">
                    <ul  className="lg:text-white">
                        <li className="list-item">
                            <Link to="/"><span className="lg:text-4xl lg:font-bold">00</span>Home
                            </Link>
                        </li>
                        
                        <li className="list-item">
                              <Link to="/destination"> <span className="lg:text-4xl lg:font-bold">01</span> Destination</Link>
                         </li>
                           <li className="list-item">
                            <Link to="/crew"><span className="lg:text-4xl lg:font-bold">02</span> Crew</Link>
                         </li>

                        <li className="list-item"> <Link to="/technology"> <span className="lg:text-4xl lg:font-bold">03</span> Technology</Link>
                        </li>

                    </ul>
                </nav>
                <div className="lg:hidden">
                    <button onClick={handleClick}>
                        <CiMenuBurger className="text-white text-4xl" />
                    </button>
                </div>
            </header>
        </>
    )
}