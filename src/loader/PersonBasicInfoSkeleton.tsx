export default function PersonBasicInfoSkeleton() {
    return (
        <div className="flex justify-center gap-5 w-[90%] mx-auto items-start animate-pulse">
            
            {/* Image */}
            <div className="w-60 h-80 bg-gray-300 rounded-md shadow-md shadow-gray-400" />

            {/* Text Section */}
            <div className="flex-1">
                
                {/* Name */}
                <div className="h-7 w-52 bg-gray-300 rounded mb-4" />

                {/* About Paragraph */}
                <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-300 rounded" />
                    <div className="h-4 w-full bg-gray-300 rounded" />
                    <div className="h-4 w-5/6 bg-gray-300 rounded" />
                    <div className="h-4 w-4/6 bg-gray-300 rounded" />
                    <div className="h-4 w-3/6 bg-gray-300 rounded" />
                </div>

            </div>
        </div>
    )
}