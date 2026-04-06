import { NavLink } from "react-router-dom"

const Header = () => {

    return (
        <div className="header">
            <nav>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/bank'>BANK</NavLink>
                <NavLink to='/counter'>COUNT</NavLink>
                <NavLink to='/theme'>THEME</NavLink>
            </nav>
        </div>
    )
}

export default Header