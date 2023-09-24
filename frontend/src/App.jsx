import React, { useEffect, useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [promptText, setPromptText] = useState('');

  useEffect(() => {
    fetch('https://uiowa.onrender.com/getcat')
      .then((response) => response.json())
      .then((response) => {
        setCategories(response.res);
      });
  }, []);

  const fetchPrompt = () => {
    fetch(`https://uiowa.onrender.com/get?type=${encodeURIComponent(selectedCategory)}`)
      .then((response) => response.json())
      .then((response) => {
        setPromptText(response.value[0][0]);
      });
  };

  const saveData = () => {
    const formData = new FormData();
    formData.append('type', selectedCategory);
    formData.append('value', promptText);

    fetch('https://uiowa.onrender.com/set', { method: 'POST', body: formData });
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category Title
          </label>
          <select
            id="category"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prompt">
            Prompt
          </label>
          <input
            id="prompt"
            className="appearance-none block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={promptText}
            readOnly
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={fetchPrompt}
            disabled={!selectedCategory}
          >
            Get Prompt
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={saveData}
            disabled={!selectedCategory || !promptText}
          >
            Save Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
