import { useParams } from "react-router"
import Info from "./Info"
import Images from "./Images"
import Characters from "./Characters"
import Episodes from "./Episodes"

export default function AnimeDetail()
{
    // Getting the id parameter
    const { id } = useParams()

    if (!id)
    {
        return <p>Invalid Id or the detail about this anime is unavailable.</p>
    }

    return (
        <div className="bg-linear-to-b from-background to-[#79CBCA]">
            <Info id={id} />
            <Images id={id} />
            <Characters id={id} />
            <Episodes id={id} />
        </div>
    )
}