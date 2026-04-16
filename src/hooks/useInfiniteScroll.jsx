import { useEffect, useRef, useState } from "react";
import { fetchImages } from "../services/api";

export const useInfiniteScroll = (query) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef(null);

  // 🔥 Load images (API call)
  const loadImages = async (pageNumber, searchQuery) => {
    try {
      const data = await fetchImages(searchQuery, pageNumber);

      if (!data || data.length === 0) {
        setHasMore(false);
        return;
      }

      setImages((prev) => [...prev, ...data]);
    } catch (err) {
      console.log("API Error:", err);
    }
  };

  // 🔥 Reset when search query changes (IMPORTANT)
  useEffect(() => {
    const init = async () => {
      setImages([]);
      setPage(1);
      setHasMore(true);
      setLoading(true);

      const data = await fetchImages(query, 1);

      setImages(data || []);
      setLoading(false);
    };

    init();
  }, [query]);

  // 🔥 Load more when page changes
  useEffect(() => {
    if (page === 1) return;

    const fetchMore = async () => {
      setLoadingMore(true);

      const data = await fetchImages(query, page);

      if (!data || data.length === 0) {
        setHasMore(false);
      } else {
        setImages((prev) => [...prev, ...data]);
      }

      setLoadingMore(false);
    };

    fetchMore();
  }, [page, query]);

  // 🔥 Intersection Observer (Infinite Scroll trigger)
  const lastImageRef = (node) => {
    if (loadingMore) return;
    if (!hasMore) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  };

  return {
    images,
    loading,
    loadingMore,
    lastImageRef,
  };
};