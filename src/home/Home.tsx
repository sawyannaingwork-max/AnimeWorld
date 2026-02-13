import type { animeListResponseType } from "../type";
import Airing from "./Airing";
import Favorite from "./Favorite";
import Popular from "./Popular";
import Result from "./Result";
import Upcoming from "./Upcoming";

// Type for home props
interface HomeProps {
    isFetching : boolean,
    isError : boolean,
    page : number,
    data : animeListResponseType | undefined,
    setPage : React.Dispatch<React.SetStateAction<number>>,

}
export default function Home({isFetching, isError, data, page, setPage} : HomeProps)
{
    return(
        <>
            <div className="text-background font-albert bg-linear-to-tr from-secondary to-primary h-[50vh] flex flex-col text-center justify-center gap-10">
                <h1 className="w-[90%] mx-auto text-3xl">Your Gateway to the Anime Universe</h1>
                <p className="w-[90%] mx-auto text-xl">From timeless classics to the latest releases, dive deep into worlds that inspire, move, and excite.</p>
            </div>
            <div id="anime-list" className="pt-9">
                <Result 
                    isFetching = {isFetching}
                    isError = {isError}
                    data = {data}
                    page = {page}
                    setPage = {setPage}
                />
                <Popular />
                <Favorite />
                <Airing />
                <Upcoming />
            </div>
        </>
    )
}