export default function AnimeStaffSkeleton() {
    return (
        <div className="flex justify-between flex-wrap gap-5 mt-9 w-[90%] mx-auto animate-pulse">
            
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="w-50">
                    
                    {/* Image */}
                    <div className="w-full h-75 bg-gray-300 rounded-md shadow-md shadow-gray-600" />
                    
                    {/* Name */}
                    <div className="h-5 w-3/4 bg-gray-300 rounded mt-2" />
                    
                    {/* Positions */}
                    <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="h-5 w-16 bg-gray-300 rounded" />
                        ))}
                    </div>

                </div>
            ))}

        </div>
    );
}