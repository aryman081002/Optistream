import SmartImage from "../Components/SmartImage";
import SkeletonCard from "../Components/SkeletonCard";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { useDebounce } from "../hooks/useDebounce";
import { useState } from "react";

function Home() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const { images, loading, loadingMore, lastImageRef } =
    useInfiniteScroll(debouncedQuery);

  return (
    <div className="bg-black text-white min-h-screen p-5">

      <h1 className="text-3xl font-bold mb-5">
        OptiStream 🚀
      </h1>

      <input
        className="w-full p-3 mb-5 text-black rounded"
        placeholder="Search images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : images.map((item, index) => {
              const isLast = index === images.length - 1;

              return (
                <div
                  key={item.id}
                  ref={isLast ? lastImageRef : null}
                  className="bg-gray-900 rounded-xl overflow-hidden"
                >
                  <SmartImage
                    src={item.src.medium}
                    alt={item.photographer}
                  />

                  <div className="p-3">
                    <p className="text-sm">{item.photographer}</p>
                  </div>
                </div>
              );
            })}
      </div>

      {loadingMore && (
        <p className="text-center text-gray-400 mt-5">
          Loading more images...
        </p>
      )}
    </div>
  );
}

export default Home;