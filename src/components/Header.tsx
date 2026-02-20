import { NavLink } from "react-router"
export default function Header()
{
    return(
        <header className="h-15 sticky z-10 top-0 bg-background justify-between flex items-center px-5">

            <h1 className="text-3xl font-alice text-text">Anime World</h1>
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <NavLink className="link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/anime">Anime</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}