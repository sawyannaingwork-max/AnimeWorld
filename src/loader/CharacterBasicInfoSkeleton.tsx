export default function CharacterBasicInfoSkeleton() {
    return (
        <div className="mt-9 w-[90%] mx-auto animate-pulse">
            
            {/* Name */}
            <div className="h-8 w-64 bg-gray-300 rounded mx-auto" />

            {/* Image */}
            <div className="mt-5 w-60 h-80 bg-gray-300 rounded-md shadow-lg shadow-gray-400 mx-auto" />

            {/* About Section */}
            <div className="mt-9">
                
                {/* Section Title */}
                <div className="h-7 w-40 bg-gray-300 rounded mb-2" />
                
                {/* Paragraph */}
                <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-full" />
                    <div className="h-4 bg-gray-300 rounded w-5/6" />
                    <div className="h-4 bg-gray-300 rounded w-4/6" />
                    <div className="h-4 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-300 rounded w-2/3" />
                </div>

            </div>

        </div>
    );
}