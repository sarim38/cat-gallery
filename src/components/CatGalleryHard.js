import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatGalleryHard = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchCatData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=5&page=${page}&order=Desc`);
      setCats((prevCats) => [...prevCats, ...response.data]);
    } catch (err) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-6 text-teal-600">Hard Task: Cat Image Gallery with Infinite Scroll</h2>
      <div className="grid grid-cols-1 gap-6 mt-6"> {/* Changed to single-column layout */}
        {loading && <div className="loader"></div>}
        {error && <p className="text-red-500">{error}</p>}
        {cats.length === 0 && !loading && <p>No cats available</p>}
        {cats.map((cat) => (
          <div key={cat.id} className="border rounded-lg shadow-md">
            <img src={cat.url} alt="Cat" className="w-full h-64 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatGalleryHard;
