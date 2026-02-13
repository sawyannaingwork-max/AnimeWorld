// Type for Anime Props
interface AnimeProps {
    id : number | null,
    image : string | null | undefined
    title : string | null
}
export default function Anime({id, image, title} : AnimeProps)
{
    return(
        
            <div className="relative mx-auto w-56.25 h-75 hover:shadow-lg shadow-black duration-300 cursor-pointer">
                {
                    image && 
                    <img className="w-full rounded-md h-full object-cover object-center" src={image} alt={title? title : "Unknown"} />
                }

                <div className="bg-[rgba(0,0,0,0.7)] absolute bottom-0 w-full py-2 px-2 rounded-b-md">
                    <h2 className="pb-2 font-itim text-secondary">{title? title : "Unknown"}</h2>
                    <button className="primary-btn">Look Detail</button>
                </div>
            </div>
            
    )
}