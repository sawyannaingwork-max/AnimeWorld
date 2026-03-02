// Type for Anime
export interface AnimeType {
    mal_id : number | null,
    url : string | null,
    images : {
        jpg? : {
            image_url? : string | null,
            small_image_url? : string | null,
            large_image_url? : string | null
        }
    },
    trailer : {
        youtube_id? : string | null,
        url? : string | null,
        embed_url? : string | null,
        images ?: {
            image_url? : string | null
        }
    },
    title_english : string | null,
    title_japanese : string | null,
    type : string | null,
    source : string | null,
    episodes : number | null,
    status : string | null,
    airing : boolean,
    aired : {
        from ?: string | null,
        to ?: string | null
    },
    duration : string | null,
    rating : string | null,
    score : number,
    scored_by : number | null,
    members : number | null,
    rank : number | null,
    popularity : number | null,
    favorites : number | null,
    synopsis : string | null,
    background : string | null,
    season : string | null,
    year : number | null,
    broadcast : {
        string ?: string | null
    },
    producers : {
        mal_id : number | null,
        type : string | null,
        name : string | null,
        url : string | null
    }[],
    licensors : {
        mal_id : number | null,
        type : string | null,
        name : string | null,
        url : string | null
    }[],
    studios : {
         mal_id : number | null,
        type : string | null,
        name : string | null,
        url : string | null
    }[],
    genres : {
        mal_id : number | null,
        type : string | null,
        name : string | null,
        url : string | null
    }[],
    demographics : {
        mal_id : number | null,
        type : string | null,
        name : string | null,
        url : string | null
    }[],
    explicit_genres : {
         mal_id : number | null,
        type : string | null,
        name : string | null,
        url : string | null
    }[],
    themes : {
         mal_id : number | null,
        type : string | null,
        name : string | null,
        url : string | null
    }[]
}

// Type for Anime Images
export interface AnimeImageType {
    jpg : {
        image_url? : string | null
    }
}

// Type for Anime Recommandations
export interface AnimeRecommandationType {
    entry : {
        mal_id : number | null,
        images : {
            jpg ?: {
                image_url ?: string | null
            }
        },
        title? : string | null
    }
}

// Type for Anime Character
export interface AnimeCharacterType {
    character : {
        mal_id? : number | null,
        images?: {
            jpg ?: {
                image_url ?: string | null
            }
        },
        name : string | null
    },
    role : string | null
}

// Type for anime staff
export interface AnimeStaffType {
    person : {
        mal_id : number | null,
        images : {
            jpg ?: {
                image_url ?: string | null
            }
        },
        name : string | null
    },
    positions : string[]
}

// Type for anime detail
export interface AnimeDetailType extends AnimeType {
    streaming : {
        name : string | null,
        url : string | null
    }[]
}

// Type for anime review
export interface AnimeReviewType {
    mal_id : number | null,
    reactions : {
        nice ?: number | null,
        love_it ?: number | null,
        funny ?: number | null,
        confusing ?: number | null,
        informative ?: number | null,
        well_writtern ?: number | null,
        creative ?: number | null
    },
    date : string | null,
    review : string | null,
    score : number | null,
    tags : string[],
    is_spoiler : boolean | null,
    user : {
        url ?: string | null,
        username ?: string | null,
        images ?: {
            jpg ?: {
                image_url : string | null
            }
        }
    }
}

// Type for anime character
export interface CharacterType {
    mal_id : number | null,
    images : {
        jpg ?: {
            image_url ?: string | null
        }
    },
    name : string | null,
    about : string | null,
}

// Type for anime character response
export interface CharacterResponse {
    data : CharacterType
}

// Type for anime character pictures
export interface CharacterPicType {
    jpg : {
        image_url ?: string | null
    }
}

// Type for anime character pic response
export interface CharacterPicResponse {
    data : CharacterPicType[]
}

// Type for anime character anime
export interface CharacterAnimeType {
    role : string | null,
    anime : {
        mal_id ?: number | null,
        images ?: {
            jpg ?: {
                image_url ?: string | null
            }
        },
        title : string | null
    }
}

// Type for anime characeter anime response
export interface CharacterAnimeResponse {
    data : CharacterAnimeType[]
}

// Type for anime character manga
export interface CharacterMangaType {
    role : string | null,
    manga : {
        mal_id ?: number | null,
        images ?: {
            jpg ?: {
                image_url ?: string | null
            }
        },
        title : string | null
    }
}

// Type for anime character manga response
export interface characeterMangaResponse {
    data : CharacterMangaType[]
}

// Type for anime character voices
export interface CharacterVoiceType {
    language : string | null,
    person : {
        mal_id ?: number | null,
        images ?: {
            jpg ?: {
                image_url ?: string | null
            }
        },
        name : string | null
    }
}

// Type for anime character voices response
export interface CharacterVoiceResponse {
    data : CharacterVoiceType[]
}

// Type for person
export interface PersonType {
    mal_id : number | null,
    images : {
        jpg ?: {
            image_url ?: string | null
        }
    },
    name : string | null,
    birthday : string | null,
    about : string | null
}

// Type for person response
export interface PersonResponse {
    data : PersonType
}

// Type for person image
export interface PersonImageType {
    jpg : {
        image_url ?: string | null
    }
}

// Tpye for person image response
export interface PersonImageResponse {
    data : PersonImageType[]
}

// Type for person anime
export interface PersonAnimeType {
    positon : string | null,
    anime : {
        mal_id ?: number | null,
        images ?: {
            jpg ?: {
                image_url ?: string | null
            }
        },
        title : string | null
    }
}

// Type for person anime respnse
export interface PersonAnimeResponse {
    data : PersonAnimeType[]
}

// Type for person voices acting
export interface PersonVoiceType {
    role : string | null,
    anime : {
        mal_id ?: number | null,
        images ?: {
            jpg ?: {
                image_url ?: string | null
            }
        },
        title ?: string | null
    },
    character : {
        mal_id ?: number | null,
        images ?: {
            jpg ?: {
                image_url ?: string | null
            }
        },
        name ?: string | null
    }
}

// Type for person voices response
export interface PersonVoiceResponse {
    data : PersonVoiceType[]
}

// Type for common ressponse 
export interface metaType {
    last_visible_page ?: number | null,
    has_next_page ?: boolean | null,
    current_page ?: number | null
}

// Type for animeListresponse
export interface animeListResponseType {
    pagination : metaType,
    data : AnimeType[]
}

// Type for filter Input
export interface InputType {
    type : "" | "tv" | "movie" | "ova" | "special" | "ona" | "music" | "cm" | "pv" | "tv_special",
    filter : "" | "airing" | "upcoming" | "bypopularity" | "favorite",
    rating : "" | "g" | "pg" | "pg13" | "r17" | "r" | "rx"
}

// Type for anime detail response
export interface AnimeDetailResponse {
    data : AnimeDetailType
}

// Type for anime images response
export interface AnimeImageResponse {
    data : AnimeImageType[]
}

// Type for anime character response
export interface AnimeCharacterResponse {
    data : AnimeCharacterType[]
}

// Type for anime episodes
export interface AnimeEpisodeType {
    mal_id : number | null,
    url : string | null,
    title : string | null,
    aired : string | null,
    score : number | null,
    filter : boolean | null
}

// type for anime episodes response
export interface AnimeEpisodeResponse {
    pagination : {
        last_visible_page ?: number | null,
        has_next_page ?: boolean | null
    },
    data : AnimeEpisodeType[]
}

// Type for anime recommand response
export interface AnimeRecommandationResponse {
    data : AnimeRecommandationType[]
}

// Type for anime Staff Response
export interface AnimeStaffResponse {
    data : AnimeStaffType[]
}

// Type for anime review Response
export interface AnimeReviewResponse {
    pagination : metaType,
    data : AnimeReviewType[]
}