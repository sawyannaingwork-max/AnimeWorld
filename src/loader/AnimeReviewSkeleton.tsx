export default function AnimeReviewsSkeleton() {
    return (
        <div className="mt-9 w-[90%] mx-auto animate-pulse">
            
            {/* Title */}
            <h2 className="text-center pb-5 text-2xl font-alice text-text">
                <div className="h-7 w-40 bg-gray-300 rounded mx-auto" />
            </h2>

            {/* Multiple Review Skeletons */}
            <div>
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="mt-5">
                        
                        <div className="flex gap-2 items-center">
                            <div className="w-20 h-20 rounded-full bg-gray-300 shadow-lg shadow-gray-500" />
                            <div className="space-y-2">
                                <div className="h-5 w-40 bg-gray-300 rounded" />
                                <div className="h-4 w-28 bg-gray-300 rounded" />
                            </div>
                        </div>

                        <div className="mt-3 space-y-2 h-20 overflow-hidden">
                            <div className="h-4 bg-gray-300 rounded w-full" />
                            <div className="h-4 bg-gray-300 rounded w-5/6" />
                            <div className="h-4 bg-gray-300 rounded w-4/6" />
                        </div>

                        <div className="flex gap-5 items-center mt-3">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex gap-1 items-center">
                                    <div className="w-5 h-5 bg-gray-300 rounded" />
                                    <div className="h-4 w-6 bg-gray-300 rounded" />
                                </div>
                            ))}
                        </div>

                        <div className="mt-3 h-8 w-28 bg-gray-300 rounded" />
                    </div>
                ))}
            </div>

        </div>
    );
}