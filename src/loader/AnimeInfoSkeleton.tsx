export default function AnimeInfoSkeleton() {
    return (
        <div className="mt-9 w-[90%] mx-auto animate-pulse">
            <div className="lg:flex items-start gap-5">
                
                {/* Image */}
                <div className="mx-auto lg:mx-0 w-[225px] h-[320px] bg-gray-300 rounded-md shadow-md shadow-gray-600" />

                <div className="mt-4 lg:mt-0 w-full">

                    {/* Title + Aired */}
                    <div className="lg:flex lg:gap-2">
                        <div className="h-8 w-64 bg-gray-300 rounded mx-auto lg:mx-0" />
                        <div className="mt-2 lg:mt-0 h-8 w-48 bg-gray-300 rounded mx-auto lg:mx-0" />
                    </div>

                    {/* Japanese Title */}
                    <div className="mt-2 h-6 w-56 bg-gray-300 rounded mx-auto lg:mx-0" />

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="h-6 w-24 bg-gray-300 rounded" />
                        ))}
                    </div>

                    {/* Genres */}
                    <div className="mt-5">
                        <div className="h-6 w-24 bg-gray-300 rounded mb-2" />
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="h-6 w-20 bg-gray-300 rounded" />
                            ))}
                        </div>
                    </div>

                    {/* Themes */}
                    <div className="mt-5">
                        <div className="h-6 w-24 bg-gray-300 rounded mb-2" />
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="h-6 w-20 bg-gray-300 rounded" />
                            ))}
                        </div>
                    </div>

                    {/* Demographic */}
                    <div className="mt-5">
                        <div className="h-6 w-28 bg-gray-300 rounded mb-3" />
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                            {Array.from({ length: 2 }).map((_, i) => (
                                <div key={i} className="h-6 w-24 bg-gray-300 rounded" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background */}
            <div className="mt-5 h-6 w-3/4 bg-gray-300 rounded mx-auto" />

            {/* Trailer */}
            <div className="mt-9">
                <div className="h-7 w-40 bg-gray-300 rounded mx-auto mb-5" />
                <div className="aspect-video max-w-175 mx-auto bg-gray-300 rounded" />
            </div>

            {/* Synopsis */}
            <div className="mt-9">
                <div className="h-7 w-32 bg-gray-300 rounded mx-auto mb-5" />
                <div className="space-y-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-4 bg-gray-300 rounded w-full" />
                    ))}
                </div>
            </div>

            {/* Streaming */}
            <div className="mt-9">
                <div className="h-7 w-32 bg-gray-300 rounded mx-auto mb-3" />
                <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-6 w-28 bg-gray-300 rounded" />
                    ))}
                </div>
            </div>

            {/* Licensors */}
            <div className="mt-9">
                <div className="h-7 w-32 bg-gray-300 rounded mx-auto mb-3" />
                <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-6 w-28 bg-gray-300 rounded" />
                    ))}
                </div>
            </div>

            {/* Studios */}
            <div className="mt-9">
                <div className="h-7 w-28 bg-gray-300 rounded mx-auto mb-3" />
                <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-6 w-28 bg-gray-300 rounded" />
                    ))}
                </div>
            </div>

            {/* Producers */}
            <div className="mt-9">
                <div className="h-7 w-32 bg-gray-300 rounded mx-auto mb-3" />
                <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-6 w-28 bg-gray-300 rounded" />
                    ))}
                </div>
            </div>
        </div>
    );
}