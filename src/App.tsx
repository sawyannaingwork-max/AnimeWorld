import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import Home from "./home/Home"

export default function App()
{
    return(
        <div className="bg-background">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}