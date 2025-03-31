

import React, { useState } from 'react';
import { 
    ChevronLeft, 
    ChevronRight, 
    Plus, 
    MoreVertical, 
    Star, 
    Trash2, 
    List, 
    Grid
  } from 'lucide-react';
import { FaStar, FaTrash, FaEllipsisV, FaPlus } from 'react-icons/fa';
import AddNotePopup from './AddNoteForm';

const NotesGrid = () => {
    const [viewMode, setViewMode] = useState('list');
    const [showAddFolder, setShowAddFolder] = useState(false); 
    const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
    const [folderName, setFolderName] = useState('');
    const [addedFolder, setAddedFolder] = useState(false);

    console.log(viewMode);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Project Planning Meeting',
      description: 'Review project timeline and assign tasks to team members...',
      priority: 'Medium',
      category: 'Personal',
      starred: false
    },
    {
      id: 2,
      title: 'Client Presentation',
      description: 'Prepare slides for tomorrow\'s client meeting...',
      priority: 'High',
      category: 'Work',
      starred: false
    },
    {
      id: 3,
      title: 'Weekly Review',
      description: 'Document progress and plan next week\'s objectives...',
      priority: 'Low',
      category: 'Personal',
      starred: false
    },
    {
      id: 2,
      title: 'Client Presentation',
      description: 'Prepare slides for tomorrow\'s client meeting...',
      priority: 'High',
      category: 'Work',
      starred: false
    },
    {
      id: 1,
      title: 'Project Planning Meeting',
      description: 'Review project timeline and assign tasks to team members...',
      priority: 'Medium',
      category: 'Personal',
      starred: false
    },
  ]);

  const handleOpenAddNote = () => {
    setIsAddNoteOpen(true);
  };

  const handleCloseAddNote = () => {
    setIsAddNoteOpen(false);
  };

  const handleSaveNote = (newNote) => {
    setNotes(prevNotes => [
      ...prevNotes,
      {
        id: Date.now(), // Simple ID generation
        ...newNote
      }
    ]);
  };

  const handleDeleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
};

// **Star Note Functionality**
const handleToggleStar = (id) => {
    setNotes(prevNotes => 
        prevNotes.map(note => 
            note.id === id ? { ...note, starred: !note.starred } : note
        )
    );
};

  const [categories] = useState([
    { id: 'all', name: 'All Notes', count: 24, icon: 'sticky' },
    { id: 'important', name: 'Starred', icon: 'star' },
    { id: 'trash', name: 'Trash', icon: 'trash' }
  ]);

  const [tags] = useState([
    { id: 'pending', name: 'Pending', color: 'bg-blue-500' },
    { id: 'on-hold', name: 'On Hold', color: 'bg-red-500' },
    { id: 'in-progress', name: 'In Progress', color: 'bg-yellow-500' },
    { id: 'done', name: 'Done', color: 'bg-green-500' }
  ]);

  const [priorities] = useState([
    { id: 'medium', name: 'Medium', color: 'bg-yellow-500' },
    { id: 'high', name: 'High', color: 'bg-red-500' },
    { id: 'low', name: 'Low', color: 'bg-green-500' }
  ]);

  const handlePlusClick = () => {
    setShowAddFolder(true); // Show folder input
  };

  // Handle folder name input
  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  // Handle folder addition
  const handleAddFolder = () => {
    if (folderName.trim()) {
      setAddedFolder(true); // Set folder as added
      setShowAddFolder(false); // Hide the input field
      setFolderName(''); // Reset folder name
    }
  };

  const getPriorityClasses = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'Low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-48 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="flex items-center px-3 py-4">
          <div className="bg-indigo-100 rounded p-2 mr-2">
            {/* <span className="text-indigo-600 font-bold">GD</span> */}
          </div>
          <h5 className="font-medium">Notes</h5>
        </div>
        
        <div className="px-3 py-2">
          <h6 className="text-gray-500 text-xs font-medium mb-2">Notes List</h6>
          <ul>
            {categories.map(category => (
              <li key={category.id} className={`mb-1 rounded ${category.id === 'all' ? 'bg-gray-900 text-white' : ''}`}>
                <div className="flex items-center px-3 py-2">
                  <div className="mr-2">
                    {category.id === 'all' && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    )}
                    {category.id === 'important' && (
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                    {category.id === 'trash' && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-grow">{category.name}</div>
                  {category.id === 'all' && <div className="text-xs bg-gray-700 text-white px-2 py-1 rounded">{category.count}</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="px-4 py-2">
          <h6 className="text-gray-500 text-xs font-medium mb-2 flex justify-between">Tags  <i className="fa-solid fa-plus cursor-pointer" onClick={handlePlusClick}></i></h6>
          <ul>
            {tags.map(tag => (
              <li key={tag.id} className="mb-1">
                <div className="flex items-center px-3 py-2">
                  <div className="mr-2">
                    <span className={`inline-block w-3 h-3 rounded-full ${tag.color}`}></span>
                  </div>
                  <div>{tag.name}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="px-4 py-2">
      <h6 className="text-gray-500 text-xs font-medium mb-2 flex justify-between">
        Priority
        {/* Plus Icon for adding folder */}
        <i className="fa-solid fa-plus cursor-pointer" onClick={handlePlusClick}></i>
      </h6>
      <ul>
        {priorities.map((priority) => (
          <li key={priority.id} className="mb-1 flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2">
                {/* Folder Icon */}
                <i className="fa-solid fa-folder text-gray-600"></i>
              </div>
              <div>{priority.name}</div>
            </div>
            {/* Folder color indicator */}
            <div className={`inline-block w-3 h-3 rounded-full ${priority.color}`}></div>
          </li>
        ))}
      </ul>

      {/* Conditionally render the "Add Folder" input */}
      {showAddFolder && (
        <div className="mt-3 px-3 py-2 bg-gray-100 border rounded-md">
          <input
            type="text"
            className="border p-2 w-full rounded-md"
            placeholder="Enter folder name"
            value={folderName}
            onChange={handleFolderNameChange} // Update folder name state
          />
          <button
            className="mt-2 bg-blue-500 text-white p-2 rounded-md"
            onClick={handleAddFolder} // Handle folder addition
          >
            Add Folder
          </button>
        </div>
      )}

      {/* Conditionally render the added folder */}
      {addedFolder && (
        <div className="mt-3 text-green-500 font-medium">
          Folder "{folderName}" added successfully under Low Priority!
        </div>
      )}
    </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex">
              <div className="relative">
                <button className="flex items-center bg-white border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Bulk Actions
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <button className="bg-white border border-gray-300 rounded px-4 py-2 text-sm ml-2">Apply</button>
            </div>
            <div className="flex">

            <div className="flex items-center">
              <div className="mr-2 flex border border-gray-300 rounded">
                <button 
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}
                 onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </button>
                <button 
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}
                 onClick={() => setViewMode('grid')}
                >
                  <Grid size={18} />
                </button>
              </div>
           
              <button className="bg-gray-900 text-white rounded px-4 py-2 text-sm flex items-center"  onClick={handleOpenAddNote}  >
                <Plus size={16} className="mr-1" />
                Add Note
              </button>
            </div>
                
         
          
            </div>
          </div>

          <h4 className="text-xl font-medium mb-4">Important Notes</h4>

          
                    {viewMode === 'list' ? (
                        <div className="space-y-4">
                        {notes.map((note) => (
                          <div key={note.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="p-2">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${note.priorityColor}`}>
                                    {note.priority}
                                  </span>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                  <MoreVertical size={16} />
                                </button>
                              </div>
                            
                              <div className="flex justify-content-between items-center mt-2">
                              <h5 className="font-medium mb-2">{note.title}</h5>
                                <div className="flex gap-3 ">
                                  <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                                    <span className="text-gray-600 text-xs">JP</span>
                                 
                                </div>
                                <div className="flex-grow">
                                  <div className="text-sm">{note.category}</div>
                                </div>
                                <div className="flex">
                                  <button className="p-1 text-gray-400 hover:text-yellow-500"  onClick={() => handleToggleStar(note.id)}>
                                    <Star size={16}  className={note.starred ? 'text-yellow-500 ' : ''} />
                                  </button>
                                  <button className="p-1 text-gray-400 hover:text-red-500" onClick={() => handleDeleteNote(note.id)}>
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm">{note.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : 
                    (
                    // <div className="space-y-4">
                    //   {notes.map((note) => (
                    //     <div key={note.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    //       <div className="p-4">
                    //         <div className="flex justify-between items-start mb-2">
                    //           <div>
                    //             <span className={`px-3 py-1 rounded-full text-xs font-medium ${note.priorityColor}`}>
                    //               {note.priority}
                    //             </span>
                    //           </div>
                    //           <button className="text-gray-400 hover:text-gray-600">
                    //             <MoreVertical size={16} />
                    //           </button>
                    //         </div>
                    //         <h5 className="font-medium mb-2">{note.title}</h5>
                    //         <p className="text-gray-600 text-sm">{note.description}</p>
                    //         <div className="flex items-center mt-4">
                    //           <div className="mr-2">
                    //             <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                    //               <span className="text-gray-600 text-xs">JP</span>
                    //             </div>
                    //           </div>
                    //           <div className="flex-grow">
                    //             <div className="text-sm">{note.category}</div>
                    //           </div>
                    //           <div className="flex">
                    //             <button className="p-1 text-gray-400 hover:text-yellow-500">
                    //               <Star size={16} />
                    //             </button>
                    //             <button className="p-1 text-gray-400 hover:text-red-500">
                    //               <Trash2 size={16} />
                    //             </button>
                    //           </div>
                    //         </div>
                    //       </div>
                    //     </div>
                    //   ))}
                    // </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {notes.map(note => (
                      <div key={note.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityClasses(note.priority)}`}>
                              {note.priority}
                            </span>
                            <button className="text-gray-400 hover:text-gray-600">
                              <FaEllipsisV className="w-4 h-4" />
                            </button>
                          </div>
                          <h5 className="font-medium mb-2">{note.title}</h5>
                          <p className="text-gray-600 text-sm">{note.description}</p>
                          <div className="flex items-center mt-4">
                            <div className="mr-2">
                              <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                                <span className="text-gray-600 text-xs">JP</span>
                              </div>
                            </div>
                            <div className="flex-grow ">
                              <div className="text-sm ">{note.category}</div>
                            </div>
                            <div className="flex">
                              <button className="p-1 text-gray-400 hover:text-yellow-500">
                                <FaStar className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-400 hover:text-red-500">
                                <FaTrash className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                    )
                    }
          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map(note => (
              <div key={note.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityClasses(note.priority)}`}>
                      {note.priority}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsisV className="w-4 h-4" />
                    </button>
                  </div>
                  <h5 className="font-medium mb-2">{note.title}</h5>
                  <p className="text-gray-600 text-sm">{note.description}</p>
                  <div className="flex items-center mt-4">
                    <div className="mr-2">
                      <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-gray-600 text-xs">JP</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm">{note.category}</div>
                    </div>
                    <div className="flex">
                      <button className="p-1 text-gray-400 hover:text-yellow-500">
                        <FaStar className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-500">
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
        <AddNotePopup 
        isOpen={isAddNoteOpen} 
        onClose={handleCloseAddNote} 
        onSave={handleSaveNote}
      />

      </div>
    </div>
  );
};

export default NotesGrid;