import React, { useState } from 'react';

function Form() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let result = fetch('http://127.0.0.1:5000/addPackage',{
//       method: 'post',
//       body:JSON.stringify({title , price , url , description }),
//       headers:{'content-type': 'application/json'}
//     })
//     console.log(result);
//     if(result)
//       alert('Done!');
//   };

const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/addPackage',{
      method: 'post',
      body: JSON.stringify({ title, price, url, description }),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Done!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
  };
  

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
