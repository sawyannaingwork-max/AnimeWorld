import type { InputType } from "./../type"
import { useState } from "react"
import Form from "./Form"
import Result from "./Result"

export default function AnimePage()
{

    // Defining state for form
    const [input, setInput] = useState<InputType>({
        type : "",
        filter : "",
        rating : ""
    })

    // Defining state for page
    const [page, setPage] = useState<number>(1)

    return (
        <div>
            <Form 
                input = {input}
                setInput = {setInput}
                setPage = {setPage}
            />
            <Result 
                input = {input}
                page = {page}
                setPage = {setPage}
            />
        </div>
    )
}
