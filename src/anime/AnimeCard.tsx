import { useState } from "react";
import type { AnimeType } from "../type";

export default function AnimeCard(props : AnimeType)
{
    // Defining state for playing
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    return(
        <div>
            {
                !isPlaying && props.images?.jpg?.image_url && 
                <div className="relative h-88.25">
                    <img className="w-full h-full object-cover rounded-md hover:shadow-md cursor-pointer shadow-black duration-300" src={props.images.jpg.image_url} alt={props.title_english? props.title_english : "Unknown"}/>
                </div>
            } 

            {
                isPlaying && props.trailer.embed_url && 
                <iframe 
                    className="w-62.5 h-88.25"
                    src={props.trailer.embed_url}
                    allow = "autoplay"
                >
                </iframe>
            }

            <h2 className="font-itim text-primary py-2 text-lg">{props.title_english? props.title_english : "Unknown"}</h2>
            {
                props.trailer.embed_url && 
                <button onClick={() => setIsPlaying(!isPlaying)} className="mb-3 primary-btn">{isPlaying? "Stop Trailer" : "Watch Trailer"}</button>
            }
            <div className="flex flex-wrap gap-2">
                {
                    props.episodes && 
                    <p className="tag">{props.episodes} Episodes</p>
                }
                {
                    props.rank && 
                    <p className="tag">Rank #{props.rank}</p>
                }
                {
                    props.type && 
                    <p className="tag">{props.type}</p>
                }
                {
                    props.popularity &&
                    <p className="tag">Popularity #{props.popularity}</p>
                }
                {
                    props.status &&
                    <p className="tag">{props.status}</p>
                }
                {
                    props.score &&
                    <p className="tag">{props.score} Score</p>
                }
                {
                    props.rating &&
                    <p className="tag">{props.rating}</p>
                }
            </div>
        </div>
    )
}