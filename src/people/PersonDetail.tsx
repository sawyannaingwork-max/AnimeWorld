import { useParams } from "react-router";
import BasicInfo from "./Basicinfo";
import Images from "./Images";
import Animes from "./Animes";
import Voices from "./Voices";
import { useEffect } from "react";

export default function PersonDetail()
{
    // Getting the params
    const { id } = useParams()

    // Making sure scroll bar is at the top
    useEffect(() => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }, [])
    if (!id)
    {
        return <p>Invalid Usage or Id.</p>
    }

    return(
        <div>
            <BasicInfo id = {id} />
            <Images id = {id} />
            <Animes id = {id} />
            <Voices id = {id} />
        </div>
    )

}