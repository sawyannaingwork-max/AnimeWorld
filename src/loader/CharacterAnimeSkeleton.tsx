export default function CharacterAnimesSkeleton() {
    return (
        <div className="mt-9 w-[90%] mx-auto animate-pulse">
            
            {/* Title */}
            <h2 className="text-center text-2xl font-alice mb-5">
                <div className="h-7 w-52 bg-gray-300 rounded mx-auto" />
            </h2>

            {/* Anime Cards Grid */}
            <div className="flex justify-center flex-wrap gap-10">
                
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="w-56.25">
                        
                        {/* Image */}
                        <div className="w-full h-75 bg-gray-300 rounded-md" />
                        
                        {/* Title */}
                        <div className="mt-2 h-5 w-3/4 bg-gray-300 rounded mx-auto" />

                    </div>
                ))}

            </div>
        </div>
    );
}