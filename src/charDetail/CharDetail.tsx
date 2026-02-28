import { useParams } from "react-router";
import BasicInfo from "./BasicInfo";
import Images from "./Images";
import Animes from "./Animes";
import Mangas from "./Mangas";
import Voices from "./Voices";

export default function CharDetail()
{
    // Gettng the params id
    const { id } = useParams()

    if (!id)
    {
        return <h1>Something went wrong. Try agian later.</h1>
    }

    return(
        <div>
            <BasicInfo id= {id} />
            <Images id = {id} />
            <Animes id = {id} />
            <Mangas id = {id } />
            <Voices id = {id} />
        </div>
    )
}