const SkeletonCard = () => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-60 bg-gray-700"></div>

      {/* Text Skeleton */}
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>

    </div>
  );
};

export default SkeletonCard;