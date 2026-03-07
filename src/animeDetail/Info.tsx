import useJikan from "../components/useJikan";
import AnimeInfoSkeleton from "../loader/AnimeInfoSkeleton";
import type { AnimeDetailResponse } from "../type";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Info({id} : {id : string})
{   
    const infoRef = useRef<HTMLDivElement | null>(null)
    // Fetching Data
    const { data, isFetching, isError } = useJikan<AnimeDetailResponse>(["Anime Detail Info", id], `https://api.jikan.moe/v4/anime/${id}/full`)

    useGSAP(() => {

        if (!infoRef.current)
        {
            return
        }

        const split = new SplitText(".background", {
            type : "words"
        } )
        const timeline = gsap.timeline()

        gsap.from(split.words, {
            y : 20,
            opacity : 0,
            duration : 0.3,
            ease : "sine",
            stagger : 0.05,
            scrollTrigger : {
                trigger : ".background",
                start : "top 80%"
            }
        })


        gsap.from(".trailer", {
            scale : 0,
            duration : 2,
            ease : "sine",
            scrollTrigger : {
                trigger : ".trailer",
                start : "top 80%"
            }
        })

        gsap.from(".synopsis", {
            y : 50,
            opacity : 0,
            ease : "sine",
            duration : 0.7,
            scrollTrigger : {
                trigger : ".synopsis",
                start : "top 80%"
            }
        })

        gsap.from(".streaming", {
            y : 30,
            opacity : 0,
            ease : "sine",
            duration : 0.7,
            stagger : 0.2,
            scrollTrigger : {
                trigger : ".streamings",
                start : "top 80%"
            }
        })

        gsap.from(".licensor", {
            y : 30,
            opacity : 0,
            ease : "sine",
            duration : 0.7,
            stagger : 0.2,
            scrollTrigger : {
                trigger : ".licensors",
                start : "top 80%"
            }
        })

        gsap.from(".studios", {
            y : 30,
            opacity : 0,
            ease : "sine",
            duration : 0.7,
            stagger : 0.2,
            scrollTrigger : {
                trigger : ".studio",
                start : "top 80%"
            }
        })

        gsap.from(".producer", {
            y : 30,
            opacity : 0,
            ease : "sine",
            duration : 0.7,
            stagger : 0.2,
            scrollTrigger : {
                trigger : ".producers",
                start : "top 80%"
            }
        })

        timeline.from("#anime-img", {
            opacity : 0,
            y : -20,
            duration : 0.6,
            ease : "sine"
        })

        timeline.from(".anime-title", {
            opacity : 0,
            y : 20,
            duration : 0.6,
            stagger : 0.2
        })

        timeline.from(".tag", {
            opacity : 0,
            y : 20,
            stagger : 0.1,
            duration : 0.4
        })
        
        return(() => {
            timeline.kill()
            split.revert()
        })

    }, {dependencies : [isFetching], scope : infoRef})
    if (isFetching)
    {
        return <AnimeInfoSkeleton />
    }
    
    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const anime = data.data

    return(
        <div className="mt-9 w-[90%] mx-auto" ref={infoRef}>
            <div className="lg:flex items-start gap-5">
                {
                    anime.images?.jpg?.image_url && <img id="anime-img" className="mx-auto rounded-md shadow-md shadow-gray-600" src={anime.images.jpg.image_url} alt={anime.title_english? anime.title_english : "Unknown"} />
                }
                <div className="mt-4 lg:mt-0">
     
                    <div className="lg:flex lg:gap-2">
                        <h1 className="anime-title text-center lg:text-left font-albert text-3xl text-primary">{anime.title_english? anime.title_english : "Unknown"}</h1>
                        <div className="anime-title mt-2 lg:mx-0 lg:max-w-max lg:mt-0 bg-primary px-2 py-1 rounded-md text-center text-background font-albert max-w-50 mx-auto">
                            Aired {anime.aired.from && `from ${anime.aired.from.split("T")[0]}`} {anime.aired.to && `to ${anime.aired.to.split("T")[0]}`}
                        </div>
                    </div>
                    {
                        anime.title_japanese && 
                        <h2 className="anime-title mt-2 lg:text-left text-2xl font-albert text-primary text-center">{anime.title_japanese} <span className="text-secondary">(Japanese)</span></h2>
                    }
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                        {
                            anime.episodes && <p className="tag">{anime.episodes} Episodes</p>
                        }
                        {
                            anime.duration && <p className="tag">{anime.duration}</p>
                        }
                        {
                            anime.rank && <p className="tag">Rank #{anime.rank}</p>
                        }
                        {
                            anime.popularity && <p className="tag">Popularity #{anime.popularity}</p>
                        }
                        {
                            anime.score && <p className="tag">Score {anime.score}</p>
                        }
                        {
                            anime.scored_by && <p className="tag">Scored by {anime.scored_by}</p>
                        }
                        {
                            anime.status && <p className="tag">{anime.status}</p>
                        }
                        {
                            anime.rating && <p className="tag">{anime.rating}</p>
                        }
                        {
                            anime.season && <p className="tag">{anime.season}</p>
                        }
                        {
                            anime.source && <p className="tag">{anime.source}</p>
                        }
                        {
                            anime.members && <p className="tag">{anime.members} Members</p>
                        }
                    </div>
                    {
                        anime.genres.length > 0 && 
                        <div className="mt-5">
                            <h3 className="font-albert text-xl mb-2">Genres</h3>
                            <div className="flex flex-wrap gap-x-5 gap-y-2">
                                {
                                    anime.genres.map((genre, index) => {
                                        return (
                                            <p key={index} className="tag">{genre.name}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        anime.themes.length > 0 && 
                        <div className="mt-5">
                            <h3 className="font-albert text-xl mb-2">Themes</h3>
                            <div className="flex flex-wrap gap-x-5 gap-y-2">
                                {
                                    anime.themes.map((theme, index) => {
                                        return (
                                            <p key={index} className="tag">{theme.name}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }

                    {
                        anime.demographics.length > 0 && 
                        <div className="mt-5">
                            <h3 className="mb-3 font-albert text-xl">Demographic</h3>
                            <div className="flex flex-wrap gap-x-5 gap-y-2">
                                {
                                    anime.demographics.map((demo, index) => {
                                        return (
                                            <p key={index} className="tag">{demo.name}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
            {
                anime.background && 
                <p className="background text-xl text-gray-800 font-albert mt-5 text-center">{anime.background}</p>
            }
            {
                anime.trailer.embed_url &&
                <div className="mt-9">
                    <h2 className="text-center text-2xl font-alice mb-5">Watch Trailer</h2>
                    <iframe src={anime.trailer.embed_url} className="trailer aspect-video max-w-175 mx-auto"></iframe>
                </div>
            }
            {
                anime.synopsis &&
                <div className="synopsis mt-9">
                    <h2 className="text-center text-2xl font-alice mb-5">Synopsis</h2>
                    <p className="whitespace-pre-wrap text-gray-700 font-albert">{anime.synopsis}</p>
                </div>
            }
            {
                anime.streaming.length > 0 && 
                <div className="mt-9 streamings">
                    <h2 className="mb-3 text-center font-alice text-2xl">Streaming</h2>
                    <div className="flex flex-wrap gap-x-5 gapy-2 justify-center">
                        {
                            anime.streaming.map((stream, index) => {
                                return(
                                    <p key={index} className="streaming">
                                        <a target="blank" className="text-secondary font-itim text-xl" href={stream.url? stream.url : "#"}>{stream.name? stream.name : "Unknown"}</a>
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            }


            {
                anime.licensors.length > 0 && 
                <div className="mt-9 licensors">
                    <h2 className="mb-3 text-center font-alice text-2xl">Licensors</h2>
                    <div className="flex flex-wrap gap-x-5 gapy-2 justify-center">
                        {
                            anime.licensors.map((licen, index) => {
                                return(
                                    <p key={index} className="licensor">
                                        <a target="blank" className="text-secondary font-itim text-xl" href={licen.url? licen.url : "#"}>{licen.name? licen.name : "Unknown"}</a>
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            }

            {
                anime.studios.length > 0 && 
                <div className="mt-9 studios">
                    <h2 className="mb-3 text-center font-alice text-2xl">Studios</h2>
                    <div className="flex flex-wrap gap-x-5 gapy-2 justify-center">
                        {
                            anime.studios.map((studio, index) => {
                                return(
                                    <p key={index} className="studio">
                                        <a target="blank" className="text-secondary font-itim text-xl" href={studio.url? studio.url : "#"}>{studio.name? studio.name : "Unknown"}</a>
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            }

            {
                anime.producers.length > 0 && 
                <div className="mt-9 producers">
                    <h2 className="mb-3 text-center font-alice text-2xl">Producers</h2>
                    <div className="flex flex-wrap gap-x-5 gapy-2 justify-center">
                        {
                            anime.producers.map((producer, index) => {
                                return(
                                    <p key={index} className="producer">
                                        <a target="blank" className="text-secondary font-itim text-xl" href={producer.url? producer.url : "#"}>{producer.name? producer.name : "Unknown"}</a>
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}