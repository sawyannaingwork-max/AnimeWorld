export default function Header()
{
    return(
        <header className="h-15 sticky z-10 top-0 bg-background justify-between flex items-center px-5">

            <h1 className="text-3xl font-alice text-text">Anime World</h1>
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <a className="link" href="#">Home</a>
                    </li>
                    <li>
                        <a className="link" href="#">Anime</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}