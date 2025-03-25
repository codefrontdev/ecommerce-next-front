export default function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
                {[...Array(fullStars)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm"></i>
                ))}
                {hasHalfStar && <i className="ri-star-half-fill text-sm"></i>}
            </div>
            <span className="text-gray-500 text-sm font-medium">({rating})</span>
        </div>
    );
}