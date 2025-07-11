// Modal.jsx
import React, { useState } from 'react';


function Modal({ setData, closeModal }) {
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: '',
    categoryColor: 'blue'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.title.trim() || !form.content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    const newNote = {
      id: crypto.randomUUID(),
      title: form.title,
      content: form.content,
      category: form.category,
      categoryColor: form.categoryColor,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
    };

    setData(prev => [...prev, newNote]);
    closeModal();
  };

  return (
    <div className="bg-zinc-800 text-white rounded-xl shadow-xl p-6 w-full max-w-md space-y-4 z-[4]">
      <h2 className="text-xl font-bold">Create New Note</h2>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Note Title"
        className="w-full p-3 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-amber-500"
      />

      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Write your note here..."
        rows="4"
        className="w-full p-3 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-amber-500 resize-none"
      />

      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category (optional)"
        className="w-full p-3 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-amber-500"
      />

      <select
        name="categoryColor"
        value={form.categoryColor}
        onChange={handleChange}
        className="w-full p-3 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-amber-500"
      >
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="amber">Amber</option>
      </select>

      <div className="flex justify-end gap-3">
        <button
          onClick={closeModal}
          className="bg-zinc-600 text-white px-4 py-2 rounded hover:bg-zinc-500 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-500 transition-colors"
        >
          Create Note
        </button>
      </div>
    </div>
  );
}

export default Modal;
