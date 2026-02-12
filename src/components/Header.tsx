import { useState } from "react";
import menu from "./../assets/menu-light.svg"

// Type for header props
interface HeaderProps {
    search : string,
    setSearch : React.Dispatch<React.SetStateAction<string>>,
    refetch : () => void
}
export default function Header({search, setSearch, refetch} : HeaderProps)
{
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function handleSubmit(e : React.SubmitEvent<HTMLFormElement>)
    {
        e.preventDefault()
        refetch()
    }
    return(
        <header className="h-20 relative bg-background justify-between flex items-center px-5">
            <div className="flex items-center gap-1">
                <img onClick={() => setIsOpen(!isOpen)} className="lg:hidden cursor-pointer" src={menu} alt="Menu Icon" />
                <h1 className="text-3xl font-alice text-text">Anime World</h1>
            </div>
            <form onSubmit={handleSubmit} className={`${isOpen? "h-auto" : "h-0"} lg:h-auto overflow-hidden flex w-full lg:w-1/2 absolute top-full left-0 lg:relative px-5 lg:top-auto lg:left-auto`} action="#">
                <input className="border w-[80%] border-textShallow px-2 font-itim rounded-sm focus:outline-none" type="text" name="anime" id="anime" placeholder="Search Anime:" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="primary-btn w-[20%]">Search</button>
            </form>
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