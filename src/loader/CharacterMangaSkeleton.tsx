export default function CharacterMangaSkeleton() {
    return (
        <div className="mt-9 w-[90%] mx-auto animate-pulse">
            
            {/* Title */}
            <h2 className="text-center font-alice text-2xl pb-5">
                <div className="h-6 w-48 bg-gray-300 rounded mx-auto" />
            </h2>

            {/* Manga Grid */}
            <div className="flex justify-center gap-10 flex-wrap">
                
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="w-55 mx-auto">
                        
                        {/* Image */}
                        <div className="w-full h-75 bg-gray-300 rounded-md" />
                        
                        {/* Title */}
                        <div className="mt-2 h-5 w-3/4 bg-gray-300 rounded" />

                    </div>
                ))}

            </div>
        </div>
    );
}