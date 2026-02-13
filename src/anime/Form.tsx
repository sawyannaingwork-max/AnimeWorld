import type React from "react"
import type { InputType } from "./../type"

// Props type for form
interface FormProps  {
    input : InputType,
    setInput : React.Dispatch<React.SetStateAction<InputType>>,
    setPage : React.Dispatch<React.SetStateAction<number>>
}

// Type Allowd values 
const types = ["tv", "movie", "ova", "special", "ona", "music", "cm", "pv", "tv_special"]

// Filter allowed values
const filter = ["airing", "upcoming", "bypopularity", "favorite"]

// Rating allowed values 
const rating = [
    {
        g : "All Ages"
    },
    {
        pg : "Children"
    },
    {
        pg13 : "Teens 13 or older"
    },
    {
        r17 : "17+ (Violence & profanity)"
    },
    {
        r : "Mild Nudity"
    },
    {
        rx : "Hentai"
    }
]

export default function Form({input, setInput, setPage} : FormProps)
{
    // for handling change
    function handleChange(e : React.ChangeEvent<HTMLSelectElement>)
    {
        // Desctructing
        const {name, value} = e.target

        setPage(1)
        setInput({
            ...input,
            [name] : value
        })
    }
    return (
        <form action="#" className="pt-9 w-[90%] mx-auto">
            <div className="form-wrapper">
                <label htmlFor="type">Type</label>
                <select name="type" id="type" value={input.type} onChange={(e) => handleChange(e)}>
                    <option value="" disabled>Chhose Type</option>
                    {
                        types.map((type, index) => {
                            return(
                                <option key={index} value={type}>{type.replace("_", " ")}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="form-wrapper">
                <label htmlFor="filter">Filter</label>
                <select name="filter" id="filter" value={input.filter} onChange={(e) => handleChange(e)}>
                    <option value="" disabled>Choose Filter</option>
                    {
                        filter.map((f, index) => {
                            return(
                                <option key={index} value={f}>{f}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="form-wrapper">
                <label htmlFor="rating">Rating</label>
                <select name="rating" id="rating" value={input.rating} onChange={(e) => handleChange(e)}>
                    <option value="" disabled>Choose Rating</option>
                    {
                        rating.map((r, index) => {
                            return(
                                <option key={index} value={Object.keys(r)[0]}>{Object.values(r)[0]}</option>
                            )
                        })
                    }
                </select>
            </div>
        </form>
    )
}