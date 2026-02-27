import { useState } from "react";
import type { AnimeReviewType } from "../type";
import likeIcon from "./../assets/like.svg"
import loveIcon from "./../assets/love.svg"
import InfoIcon from "./../assets/info.svg"
import funnyIcon from "./../assets/funny.svg"
import wellIcon from "./../assets/well.svg"
import confuseIcon from "./../assets/confuse.svg"
import creativeIcon from "./../assets/creative.svg"

export default function Review(props : AnimeReviewType)
{   
    const [isShow, setIsShow] = useState<boolean>(false)
    return(
        <div className="mt-5">
            {
                props.user.images?.jpg?.image_url && 
                <div className="flex gap-2 items-center">
                    <img className="w-20 h-20 rounded-[50%] object-cover shadow-lg shadow-gray-500" src={props.user.images.jpg.image_url} alt={props.user.username? props.user.username : "Unknown"} />
                    <div>
                        <h3 className="text-text font-bold font-itim">{props.user.username ? props.user.username : "Unknown"} <span className="tag">{props.score && props.score}/10</span></h3>
                        <span className="text-gray-700 font-semibold">{props.date && props.date.split("T")[0]}</span>
                    </div>
                </div>
            }
            <p className={`whitespace-pre-wrap overflow-hidden ${isShow? "h-auto" : "h-20"}`}>
                {props.review}
            </p>
            <div className="flex gap-5 items-center">
                {
                    props.reactions?.nice !== 0 && props.reactions?.nice &&
                    <div className="flex gap-1 items-center">
                        <img src={likeIcon} alt="Nice" />
                        <span className="font-albert font-semibold">{props.reactions.nice}</span>
                    </div>
                }

                {
                    props.reactions?.love_it !== 0 && props.reactions?.love_it &&
                    <div className="flex gap-1 items-center">
                        <img src={loveIcon} alt="Love" />
                        <span className="font-albert font-semibold">{props.reactions.love_it}</span>
                    </div>
                }

                {
                    props.reactions?.informative !== 0 && props.reactions?.informative &&
                    <div className="flex gap-1 items-center">
                        <img src={InfoIcon} alt="Information" />
                        <span className="font-albert font-semibold">{props.reactions.informative}</span>
                    </div>
                }

                {
                    props.reactions?.funny !== 0 && props.reactions?.funny && 
                    <div className="flex gap-1 items-center">
                        <img src={funnyIcon} alt="Funny" />
                        <span className="font-albert font-semibold">{props.reactions.funny}</span>
                    </div>
                }

                {
                    props.reactions?.well_writtern !== 0 && props.reactions?.well_writtern && 
                    <div className="flex gap-1 items-center">    
                        <img src={wellIcon} alt="Well Writter" />
                        <span className="font-albert font-semibold">{props.reactions.well_writtern}</span>
                    </div>
                }

                {
                    props.reactions?.confusing !== 0 && props.reactions?.confusing && 
                    <div className="flex gap-1 items-center">    
                        <img src={confuseIcon} alt="Confusing" />
                        <span className="font-albert font-semibold">{props.reactions.confusing}</span>
                    </div>
                }

                {
                    props.reactions?.creative !== 0 && props.reactions?.creative && 
                    <div className="flex gap-1 items-center">    
                        <img src={creativeIcon} alt="creative" />
                        <span className="font-albert font-semibold">{props.reactions.creative}</span>
                    </div>
                }
            </div>
            {
                !isShow && <button onClick={() => setIsShow(true)} className="secondary-btn">Show more</button>
            }
        </div>
    )           
}