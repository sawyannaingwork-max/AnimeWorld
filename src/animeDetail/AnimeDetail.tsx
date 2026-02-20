import { useParams } from "react-router"
import Info from "./Info"
import Images from "./Images"
import Characters from "./Characters"
import Episodes from "./Episodes"
import Recommand from "./Recommand"
import Staff from "./Staff"

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
            <Recommand id={id} />
            <div className="flex mt-9 rounded-md justify-center bg-background font-itim w-[90%] mx-auto max-w-100">
                <div className="w-1/2 rounded-tl-md rounded-bl-md cursor-pointer bg-text text-background py-2 text-center">Staff</div>
                <div className="w-1/2 rounded-tr-md rounded-br-md cursor-pointer text-center py-2">Reviews</div>
            </div>
            <Staff id={id} />
        </div>
    )
}