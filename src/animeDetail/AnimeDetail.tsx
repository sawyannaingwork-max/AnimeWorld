import { useParams } from "react-router"
import Info from "./Info"
import Images from "./Images"
import Characters from "./Characters"
import Episodes from "./Episodes"
import Recommand from "./Recommand"
import Staff from "./Staff"
import Reviews from "./Reviews"
import { Activity, useState } from "react"

export default function AnimeDetail()
{
    const [status, setStatus] = useState<"staff" | "reviews">("staff")

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
            <div className="sticky top-13 border-text border flex mt-9 rounded-md justify-center bg-background font-itim w-[90%] mx-auto max-w-100">
                <div onClick={() => setStatus("staff")} className={`w-1/2 rounded-tl-md rounded-bl-md cursor-pointer py-2 text-center ${status === "staff" ? "bg-text text-background" : ""}`}>Staff</div>
                <div onClick={() => setStatus("reviews")} className={`w-1/2 rounded-tl-md rounded-bl-md cursor-pointer py-2 text-center ${status === "reviews" ? "bg-text text-background" : ""}`}>Reviews</div>
            </div>
            <Activity mode={status==="staff"? "visible" : "hidden"}>
                <Staff id={id} />
            </Activity>

            <Activity mode={status==="reviews"? "visible" : "hidden"} >
                <Reviews id={id} />
            </Activity>
        </div>
    )
}