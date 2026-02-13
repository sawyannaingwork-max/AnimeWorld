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
            image_url ?: string | null
        },
        title? : string | null
    }
}

// Type for Anime Character
export interface AnimeCharacterType {
    character : {
        mal_id : number | null,
        images: {
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

// Type for anime character pictures
export interface CharacterPicType {
    jpg : {
        image_url ?: string | null
    }
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

// Type for person image
export interface PersonImageType {
    jpg : {
        image_url ?: string | null
    }
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

// Type for common ressponse 
export interface metaType {
    last_visible_page : number | null,
    has_next_page : boolean | null,
    current_page : number | null
}

// Type for animeListresponse
export interface animeListResponseType {
    pagination : metaType,
    data : AnimeType[]
}