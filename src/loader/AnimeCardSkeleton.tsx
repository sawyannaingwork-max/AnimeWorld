export default function AnimeCardSkeleton()
{
    return (
        <div className="w-[90%] mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {
                Array.from({length : 7}).map((_, index) => {
                    return(
                        <div key={index}>
                            
                            <div className="relative h-88.25">
                                <div className="w-full h-full bg-gray-400 animate-pulse"/>
                            </div>


                            <h2 className="w-30 h-2 bg-gray-400 animate-pulse my-2"></h2>
                        
                            <button className="mb-3 primary-btn">Watch Trailer</button>
                            <div className="flex flex-wrap gap-2">
                                
                                    <p className="tag animate-pulse w-25 h-5"></p>
                                    <p className="tag animate-pulse w-25 h-5"></p>
                                    <p className="tag animate-pulse w-25 h-5"></p>
                                    <p className="tag animate-pulse w-25 h-5"></p>
                                    <p className="tag animate-pulse w-25 h-5"></p>
                                    <p className="tag animate-pulse w-25 h-5"></p>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}