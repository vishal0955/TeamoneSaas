import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';

const AddNotePopup = ({ isOpen, onClose, onSave }) => {
  const [noteData, setNoteData] = useState({
    title: '',
    content: '',
    priority: 'High',
    category: 'Work'
  });
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const editorRef = useRef(null);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCommand = (command) => {
    document.execCommand(command, false, null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentHTML = editorRef.current ? editorRef.current.innerHTML : '';
    onSave({ ...noteData, content: contentHTML });
    setNoteData({
      title: '',
      content: '',
      priority: 'High',
      category: 'Work'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"  style={{zIndex:"60"}}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">Add New Note</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={noteData.title}
              onChange={handleChange}
              placeholder="Enter note title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="row">
            <div
              className="col bg-white border rounded p-3 mb-4"
              style={{ maxWidth: '649px' }}>
              <div className="d-flex flex-wrap gap-1 mb-3 align-items-center">
                <select
                  className="form-select border-0 d-inline-block me-2"
                  style={{ width: '130px', fontSize: '15px' }}>
                  <option>Normal text</option>
                </select>
                <select
                  className="form-select border-0 d-inline-block me-2"
                  style={{ width: '50px' }}>
                  <option></option>
                </select>
                <select
                  className="form-select border-0 d-inline-block me-2"
                  style={{ width: '50px' }}>
                  <option></option>
                  <option></option>
                </select>

                <button
                  type="button"
                  className="btn btn-outline-secondary border-0 d-inline-block me-2"
                  onClick={() => handleCommand('bold')}>
                  <b>B</b>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary border-0 d-inline-block me-2"
                  onClick={() => handleCommand('italic')}>
                  <i>I</i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary border-0 d-inline-block me-2"
                  onClick={() => handleCommand('underline')}>
                  <u>U</u>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary border-0 d-inline-block me-2"
                  onClick={() => handleCommand('strikeThrough')}>
                  <s>S</s>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary border-0 d-inline-block me-2"
                  onClick={() => handleCommand('superscript')}>
                  <i className="fa-solid fa-greater-than"></i>
                  <i className="fa-solid fa-less-than"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary border-0 d-inline-block me-2"
                  onClick={() => handleCommand('insertHTML')}>
                  <i className="fa-solid fa-code"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary border-0 d-inline-block me-2"
                  onClick={() => handleCommand('removeFormat')}>
                  <i className="fa-solid fa-minus"></i>
                </button>
              </div>

              <div
                ref={editorRef}
                contentEditable
                className="border p-3"
                style={{
                  minHeight: '200px',
                  borderRadius: '5px',
                  border: '1px solid #ccc'
                }}>
                Start typing here...
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select
                name="priority"
                value={noteData.priority}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                name="category"
                value={noteData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Study">Study</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Create Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotePopup;