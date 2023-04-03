import { useState } from 'react';

function CreateMovie({ userToken }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://reeltime-api.onrender.com/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Create Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

