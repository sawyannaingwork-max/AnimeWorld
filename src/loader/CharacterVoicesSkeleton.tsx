export default function CharacterVoicesSkeleton() {
    return (
        <div className="mt-9 w-[90%] mx-auto animate-pulse">
            
            {/* Title */}
            <h2 className="text-center text-2xl font-alice mb-5">
                <div className="h-7 w-48 bg-gray-300 rounded mx-auto" />
            </h2>

            {/* Voices Grid */}
            <div className="flex justify-center flex-wrap gap-10">
                
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="w-55 mx-auto">
                        
                        {/* Image */}
                        <div className="w-full h-87.5 bg-gray-300 rounded-md shadow-md" />
                        
                        {/* Name */}
                        <div className="mt-2 h-5 w-3/4 bg-gray-300 rounded" />
                        
                        {/* Language */}
                        <div className="mt-1 h-4 w-1/2 bg-gray-300 rounded" />

                    </div>
                ))}

            </div>
        </div>
    )
}