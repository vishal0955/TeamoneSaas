// import React, { useState, useRef } from 'react';
// import { X } from 'lucide-react';

// const AddNotePopup = ({ isOpen, onClose, onSave }) => {
//   const [noteData, setNoteData] = useState({
//     title: '',
//     content: '',
//     priority: 'High',
//     category: 'Work',

//   });
//   const [image, setImage] = useState(null);
//   const [content, setContent] = useState('');
//   const editorRef = useRef(null);

//   const handleContentChange = (event) => {
//     setContent(event.target.value);
//   };

//   const handleCommand = (command) => {
//     document.execCommand(command, false, null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNoteData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const contentHTML = editorRef.current ? editorRef.current.innerHTML : '';
//     onSave({ ...noteData, content: contentHTML });
//     setNoteData({
//       title: '',
//       content: '',
//       priority: 'High',
//       category: 'Work'
//     });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"  style={{zIndex:"60"}}>
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
//         <div className="flex justify-between items-center p-4 border-b">
//           <h3 className="text-lg font-medium">Add New Note</h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <X size={20} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-4">
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={noteData.title}
//               onChange={handleChange}
//               placeholder="Enter note title"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div className="row">
//             <div
//               className="col bg-white border rounded p-3 mb-4"
//               style={{ maxWidth: '649px' }}>
//               <div className="d-flex flex-wrap gap-1 mb-3 align-items-center">
//                 <select
//                   className="form-select border-0 d-inline-block me-2"
//                   style={{ width: '130px', fontSize: '15px' }}>
//                   <option>Normal text</option>
//                 </select>
//                 <select
//                   className="form-select border-0 d-inline-block me-2"
//                   style={{ width: '50px' }}>
//                   <option></option>
//                 </select>
//                 <select
//                   className="form-select border-0 d-inline-block me-2"
//                   style={{ width: '50px' }}>
//                   <option></option>
//                   <option></option>
//                 </select>

//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('bold')}>
//                   <b>B</b>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('italic')}>
//                   <i>I</i>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('underline')}>
//                   <u>U</u>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('strikeThrough')}>
//                   <s>S</s>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('superscript')}>
//                   <i className="fa-solid fa-greater-than"></i>
//                   <i className="fa-solid fa-less-than"></i>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('insertHTML')}>
//                   <i className="fa-solid fa-code"></i>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('removeFormat')}>
//                   <i className="fa-solid fa-minus"></i>
//                 </button>
//               </div>

//               <div
//                 ref={editorRef}
//                 contentEditable
//                 className="border p-3"
//                 style={{
//                   minHeight: '200px',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc'
//                 }}>
//                 Start typing here...
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
//               <select
//                 name="priority"
//                 value={noteData.priority}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
//                 <option value="High">High</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Low">Low</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//               <select
//                 name="category"
//                 value={noteData.category}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
//                 <option value="Work">Work</option>
//                 <option value="Personal">Personal</option>
//                 <option value="Study">Study</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
//               Create Note
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddNotePopup;


// import React, { useState, useRef } from 'react';
// import { X, Paperclip } from 'lucide-react';

// const AddNotePopup = ({ isOpen, onClose, onSave }) => {
//   const [noteData, setNoteData] = useState({
//     title: '',
//     content: '',
//     priority: 'High',
//     category: 'Work',
//   });
//   const [attachments, setAttachments] = useState([]);
//   const [content, setContent] = useState('');
//   const editorRef = useRef(null);
//   const fileInputRef = useRef(null);

//   const handleContentChange = (event) => {
//     setContent(event.target.value);
//   };

//   const handleCommand = (command) => {
//     document.execCommand(command, false, null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNoteData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length > 0) {
//       const newAttachments = files.map(file => ({
//         name: file.name,
//         type: file.type,
//         size: file.size,
//         file: file
//       }));
//       setAttachments(prev => [...prev, ...newAttachments]);
//     }
//   };

//   const removeAttachment = (index) => {
//     setAttachments(prev => prev.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const contentHTML = editorRef.current ? editorRef.current.innerHTML : '';
//     onSave({ ...noteData, content: contentHTML, attachments });
//     setNoteData({
//       title: '',
//       content: '',
//       priority: 'High',
//       category: 'Work'
//     });
//     setAttachments([]);
//     onClose();
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current.click();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" style={{zIndex:"60"}}>
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
//         <div className="flex justify-between items-center p-4 border-b">
//           <h3 className="text-lg font-medium">Add New Note</h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <X size={20} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-4">
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={noteData.title}
//               onChange={handleChange}
//               placeholder="Enter note title"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div className="row">
//             <div
//               className="col bg-white border rounded p-3 mb-4"
//               style={{ maxWidth: '649px' }}>
//               <div className="d-flex flex-wrap gap-1 mb-3 align-items-center">
//                 <select
//                   className="form-select border-0 d-inline-block me-2"
//                   style={{ width: '130px', fontSize: '15px' }}>
//                   <option>Normal text</option>
//                 </select>
//                 <select
//                   className="form-select border-0 d-inline-block me-2"
//                   style={{ width: '50px' }}>
//                   <option></option>
//                 </select>
//                 <select
//                   className="form-select border-0 d-inline-block me-2"
//                   style={{ width: '50px' }}>
//                   <option></option>
//                   <option></option>
//                 </select>

//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('bold')}>
//                   <b>B</b>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('italic')}>
//                   <i>I</i>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('underline')}>
//                   <u>U</u>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('strikeThrough')}>
//                   <s>S</s>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('superscript')}>
//                   <i className="fa-solid fa-greater-than"></i>
//                   <i className="fa-solid fa-less-than"></i>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('insertHTML')}>
//                   <i className="fa-solid fa-code"></i>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary border-0 d-inline-block me-2"
//                   onClick={() => handleCommand('removeFormat')}>
//                   <i className="fa-solid fa-minus"></i>
//                 </button>
//               </div>

//               <div
//                 ref={editorRef}
//                 contentEditable
//                 className="border p-3"
//                 style={{
//                   minHeight: '200px',
//                   borderRadius: '5px',
//                   border: '1px solid #ccc'
//                 }}>
//                 Start typing here...
//               </div>
//             </div>
//           </div>

//           {/* Attachments Section */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Attachments</label>
//             <div className="flex items-center">
//               <button
//                 type="button"
//                 onClick={triggerFileInput}
//                 className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
//               >
//                 <Paperclip size={16} className="mr-2" />
//                 Add Attachment
//               </button>
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 className="hidden"
//                 multiple
//               />
//             </div>
            
//             {/* Display attached files */}
//             {attachments.length > 0 && (
//               <div className="mt-2">
//                 <ul className="bg-gray-50 rounded-md p-2">
//                   {attachments.map((file, index) => (
//                     <li key={index} className="flex justify-between items-center py-1 text-sm">
//                       <span className="truncate" style={{ maxWidth: '80%' }}>
//                         {file.name} ({(file.size / 1024).toFixed(1)} KB)
//                       </span>
//                       <button
//                         type="button"
//                         onClick={() => removeAttachment(index)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <X size={16} />
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
//               <select
//                 name="priority"
//                 value={noteData.priority}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
//                 <option value="High">High</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Low">Low</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//               <select
//                 name="category"
//                 value={noteData.category}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
//                 <option value="Work">Work</option>
//                 <option value="Personal">Personal</option>
//                 <option value="Study">Study</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
//               Create Note
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddNotePopup;

import React, { useState, useRef } from 'react';
import { X, Paperclip } from 'lucide-react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

const AddNotePopup = ({ isOpen, onClose, onSave }) => {

  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const [noteData, setNoteData] = useState({
    title: '',
    content: '',
    priority: 'High',
    category: 'Work',
  });
  const [attachments, setAttachments] = useState([]);
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newAttachments = files.map(file => ({
        name: file.name,
        type: file.type,
        size: file.size,
        file: file
      }));
      setAttachments(prev => [...prev, ...newAttachments]);
    }
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentHTML = editorRef.current ? editorRef.current.innerHTML : '';
    onSave({ ...noteData, content: contentHTML, attachments });
    setNoteData({
      title: '',
      content: '',
      priority: 'High',
      category: 'Work'
    });
    setAttachments([]);
    onClose();
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Modal 
      show={isOpen} 
      onHide={onClose}
      centered
      size="md"
      
   
    >
      <Modal.Header closeButton  className={`${darkMode ? "dark-mode" : null } m-0`}>
        <Modal.Title>Add New Note</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit} className={`${darkMode ? "dark-mode" : null }`}>
        <Modal.Body className={`${darkMode ? "dark-mode" : null }`}>
          <Form.Group className="mb-3">
            <Form.Label className={`${darkMode ? "dark-mode" : null }`}>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={noteData.title}
              onChange={handleChange}
              placeholder="Enter note title"
              className={`${darkMode ? "dark-mode" : null }`}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <div className=" border rounded p-3">
              <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
                <Form.Select 
                  className= {`${darkMode ? "dark-mode" : null } w-auto`}
                  style={{ fontSize: '15px' }}
                >
                  <option>Normal text</option>
                </Form.Select>
                
                <div className="btn-group">
                  <Button 
                    variant="outline-secondary"
                    onClick={() => handleCommand('bold')}
                    className="btn-sm"
                  >
                    <b>B</b>
                  </Button>
                  <Button 
                    variant="outline-secondary"
                    onClick={() => handleCommand('italic')}
                    className="btn-sm"
                  >
                    <i>I</i>
                  </Button>
                  <Button 
                    variant="outline-secondary"
                    onClick={() => handleCommand('underline')}
                    className="btn-sm"
                  >
                    <u>U</u>
                  </Button>
                  <Button 
                    variant="outline-secondary"
                    onClick={() => handleCommand('strikeThrough')}
                    className="btn-sm"
                  >
                    <s>S</s>
                  </Button>
                </div>
                
                <Button 
                  variant="outline-secondary"
                  onClick={() => handleCommand('insertHTML')}
                  className="btn-sm"
                >
                  <i className="fa-solid fa-code">Code</i>
                </Button>
                <Button 
                  variant="outline-secondary"
                  onClick={() => handleCommand('removeFormat')}
                  className="btn-sm"
                >
                  <i className="fa-solid fa-minus">Clear</i>
                </Button>
              </div>

              <div
                ref={editorRef}
                contentEditable
                className={`${darkMode ? "dark-mode" : null } form-control `}
                style={{
                  minHeight: '200px',
                  borderRadius: '5px',
                  border: '1px solid #ccc'
                }}
              >
                Start typing here...
              </div>
            </div>
          </Form.Group>

          {/* Attachments Section */}
          <Form.Group className="mb-3">
            <Form.Label>Attachments</Form.Label>
            <div>
              <Button
                variant="outline-secondary"
                onClick={triggerFileInput}
                className="d-flex align-items-center"
                size="sm"
              >
                <Paperclip size={16} className="me-2" />
                Add Attachment
              </Button>
              <Form.Control
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="d-none"
                multiple
              />
            </div>
            
            {/* Display attached files */}
            {attachments.length > 0 && (
              <div className="mt-2">
                <ul className="list-group">
                  {attachments.map((file, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center py-2">
                      <span className="text-truncate" style={{ maxWidth: '80%' }}>
                        {file.name} ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                      <Button
                        variant="link"
                        size="sm"
                        className="text-danger p-0"
                        onClick={() => removeAttachment(index)}
                      >
                        <X size={16} />
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Form.Group>

          <Row className={`${darkMode ? "dark-mode" : null } mb-3`}>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  name="priority"
                  value={noteData.priority}
                  onChange={handleChange}
                  className={`${darkMode ? "dark-mode" : null }`}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={noteData.category}
                  onChange={handleChange}
                  className={`${darkMode ? "dark-mode" : null }`}
                >
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                  <option value="Study">Study</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="dark" type="submit">
            Create Note
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddNotePopup;