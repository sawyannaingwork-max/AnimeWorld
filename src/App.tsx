import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import Home from "./home/Home"
import AnimePage from "./anime/AnimePage"
import AnimeDetail from "./animeDetail/AnimeDetail"

export default function App()
{
    return(
        <div className="bg-background">
            <Header 
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anime" element={<AnimePage />} />
                <Route path="/anime/:id" element={<AnimeDetail />} />
            </Routes>
        </div>
    )
}