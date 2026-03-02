import { useNavigate } from "react-router";
import type { PersonVoiceType } from "../type";
import { useRef } from "react";

export default function VoiceCard(props : PersonVoiceType)
{
    const characterRef = useRef<HTMLDivElement>(null)
    const animeRef = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()


    // For handling click
    function handleCharacterClick()
    {

        if (!characterRef.current || !animeRef.current)
        {
            return
        }
        
        animeRef.current.style.display = "block"
        characterRef.current.style.display = "none"
    }

    function handleAnimeClick()
    {
        if (!characterRef.current || !animeRef.current)
        {
            return
        }

        animeRef.current.style.display = "none"
        characterRef.current.style.display = "block"
        
    }
    return(
        <div className="w-56.25 h-105 relative">
            <div onClick={handleCharacterClick} ref={characterRef} className="absolute top-0 left-0 w-full h-full cursor-pointer">
                {
                    props.character.images?.jpg?.image_url && 
                    <img className="w-full h-82.5 rounded-md shadow-md shadow-gray-400" src={props.character.images.jpg.image_url} alt={props.character.name? props.character.name : "Unknown"} />
                }
                <h3 className="font-itim py-2">{props.character.name? props.character.name : "Unknown"} {props.role && <span>({props.role})</span>}</h3>
                {
                    props.character.mal_id && <button onClick={() => navigate(`/character/${props.character.mal_id}`)} className="secondary-btn">Look Detail</button>
                }
            </div>

            <div onClick={handleAnimeClick} ref={animeRef} className="absolute hidden top-0 left-0 w-full h-full cursor-pointer">
                {
                    props.anime?.images?.jpg?.image_url && 
                    <img className="w-full h-82.5rounded-md shadow-md shadow-gray-400" src={props.anime.images.jpg.image_url} alt={props.anime.title? props.anime.title : "Unknown"} />
                }
                <h3 className="font-itim py-2">{props.anime.title? props.anime.title : "Uknown"}</h3>
                {
                    props.anime.mal_id && <button onClick={() => navigate(`/anime/${props.anime.mal_id}`)} className="secondary-btn">Look Detail</button>
                }
            </div>
        </div>
    )
}