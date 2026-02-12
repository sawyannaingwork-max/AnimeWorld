import arrow from "./../assets/arrow.svg"

export default function AnimeSkeleton({text} : {text : string})
{
    return(
        <div className="mt-9">
            <h1 className="font-alice text-2xl text-center mb-5">{text}</h1>
            <div className="flex justify-between items-center w-[90%] mx-auto">
      
            <img
                src={arrow}
                alt="Prev"
                className="cursor-pointer"
            />

            <div className="flex gap-5 overflow-hidden">
                {
                    Array.from({length : 5}).map((_, index) => {
                        return(
                            <div key={index} className="relative mx-auto w-56.25 h-75 hover:scale-[1.2] duration-300 cursor-pointer animate-pulse">
                                <div className="w-full h-full bg-gray-300">

                                </div>

                                <div className="bg-[rgba(0,0,0,0.7)] absolute bottom-0 w-full py-2 px-2">
                                    <h2 className="mb-2 min-w-30 h-2 bg-gray-300"></h2>
                                    <button className="bg-gray-300 px-2 py-1">Look Detail</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <img
                src={arrow}
                alt="Next"
                className="rotate-180 cursor-pointer"
            />
            </div>
        </div>
    )
}