const API_KEY = "aGPj1RMYEtyWnbGVP0dXYEDW0hVuki4wdAEJN13dXIaSx9DaDCeW0B5C";

export const fetchImages = async (query = "", page = 1) => {
    // Fetch API Already Supports Infinite Scroll Pagination
  const url = query
    ? `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=20`
    : `https://api.pexels.com/v1/curated?page=${page}&per_page=20`;

  const res = await fetch(url, {
    headers: {
      Authorization: API_KEY,
    },
  });

  const data = await res.json();

  return data.photos;
};