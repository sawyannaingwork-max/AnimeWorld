import { useParams } from "react-router";
import BasicInfo from "./BasicInfo";
import Images from "./Images";
import Animes from "./Animes";
import Mangas from "./Mangas";
import Voices from "./Voices";
import { useEffect } from "react";

export default function CharDetail()
{
    // Gettng the params id
    const { id } = useParams()

    // Making sure the scroll bar is at the top
    useEffect(() => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }, [])
    
    if (!id)
    {
        return <h1>Something went wrong. Try agian later.</h1>
    }

    return(
        <div className="bg-linear-to-b from-[#FFFFFF] to-[#79CBCA]">
            <BasicInfo id= {id} />
            <Images id = {id} />
            <Animes id = {id} />
            <Mangas id = {id } />
            <Voices id = {id} />
        </div>
    )
}