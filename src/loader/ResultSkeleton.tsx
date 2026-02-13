export default function ResultLoader()
{
    return(
        <div className="mt-9 animate-pulse w-[90%] mx-auto">
            <h1 className="text-center text-2xl font-alice pb-5 text-text">Result</h1>
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
        </div>
    )
}