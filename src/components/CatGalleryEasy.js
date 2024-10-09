import React, { useState } from 'react';
import axios from 'axios';

const CatGalleryEasy = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCatData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=5');
      setCats(response.data); // Fetch new images every time and replace old ones.
    } catch (err) {
      console.error('Error fetching data', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-6 text-green-600">Easy Task: Fetch and Show Cat Images</h2>

      {/* Fetch button should always be visible */}
      <div>
        {cats.length === 0 && !loading && <p>No images available</p>}
        <button
          onClick={fetchCatData}
          className="bg-green-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-green-600 transition"
        >
          Fetch Images
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {loading && <p>Loading...</p>}
        {cats.map((cat) => (
          <div key={cat.id} className="border rounded-lg shadow-md">
            <img src={cat.url} alt="Cat" className="w-full h-64 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatGalleryEasy;
