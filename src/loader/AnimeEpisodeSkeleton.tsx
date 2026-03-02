export default function AnimeEpisodesSkeleton() {
    return (
        <div className="w-[90%] mx-auto mt-9 animate-pulse">
            
            {/* Title */}
            <h2 className="mb-5 text-center text-2xl font-alice">
                <div className="h-7 w-32 bg-gray-300 rounded mx-auto" />
            </h2>

            {/* Table */}
            <table className="w-full">
                <thead className="bg-primary">
                    <tr>
                        <th className="py-2 w-[40%] px-2">
                            <div className="h-5 bg-gray-300 rounded w-3/4" />
                        </th>
                        <th className="py-2 w-[15%]">
                            <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto" />
                        </th>
                        <th className="py-2 w-[30%]">
                            <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto" />
                        </th>
                        <th className="py-2 w-[15%]">
                            <div className="h-5 bg-gray-300 rounded w-1/2 mx-auto" />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <tr key={index} className="bg-background">
                            <td className="px-2 py-2">
                                <div className="h-5 bg-gray-300 rounded w-full" />
                            </td>
                            <td className="py-2">
                                <div className="h-5 bg-gray-300 rounded w-1/2 mx-auto" />
                            </td>
                            <td className="py-2">
                                <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto" />
                            </td>
                            <td className="py-2">
                                <div className="h-5 bg-gray-300 rounded w-1/3 mx-auto" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Buttons */}
            <div className="mt-5 flex justify-between">
                <div className="h-10 w-24 bg-gray-300 rounded" />
                <div className="h-10 w-24 bg-gray-300 rounded" />
            </div>

        </div>
    );
}