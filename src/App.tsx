import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from "react"

import ErrorBoundary from "./components/ErrorBoundary"
import SuspenseLoader from "./loader/SuspenseLoader"

const Home = lazy(() => import("./home/Home"))
const AnimePage = lazy(() => import("./anime/AnimePage"))
const AnimeDetail = lazy(() => import("./animeDetail/AnimeDetail"))
const CharDetail = lazy(() => import("./charDetail/CharDetail"))
const PersonDetail = lazy(() => import("./people/PersonDetail"))

export default function App()
{
    return(
        <div className="bg-background">
            <ErrorBoundary fallback={<h1 className="w-[90%] mx-auto text-2xl font-itim text-red-500">Something went wrong. Try again later.</h1>}>
                <Header 
                />
                <Suspense fallback={<SuspenseLoader/>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/anime" element={<AnimePage />} />
                        <Route path="/anime/:id" element={<AnimeDetail />} />
                        <Route path="/character/:id" element={<CharDetail />} />
                        <Route path="/people/:id" element={<PersonDetail />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}