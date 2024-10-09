import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatGalleryMedium = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchCatData = async (pageNum) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=5&page=${pageNum}&order=Desc`);
      setCats(response.data);
    } catch (err) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatData(page);
  }, [page]);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-6 text-purple-600">Medium Task: Cat Image Gallery with Pagination</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-center">
        {loading && <div className="loader"></div>}
        {error && <p className="text-red-500">{error}</p>}
        {cats.length === 0 && !loading && <p>No cats available</p>}
        {cats.map((cat) => (
          <div key={cat.id} className="border rounded-lg shadow-md">
            <img src={cat.url} alt="Cat" className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
          className="bg-purple-500 text-white py-2 px-6 rounded-lg mx-2 hover:bg-purple-600 transition"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-purple-500 text-white py-2 px-6 rounded-lg mx-2 hover:bg-purple-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CatGalleryMedium;
