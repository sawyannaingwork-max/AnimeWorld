import { useParams } from "react-router";
import BasicInfo from "./Basicinfo";
import Images from "./Images";
import Animes from "./Animes";
import Voices from "./Voices";

export default function PersonDetail()
{
    // Getting the params
    const { id } = useParams()

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