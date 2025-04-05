import React, { useState } from "react";
import {
  FaFolder,
  FaFilePdf,
  FaFileImage,
  FaFileAlt,
  FaStar,
  FaUserCircle,
  FaFolderPlus,
  FaGoogleDrive,
  FaSearch,
  FaEllipsisV,
  FaTh,
  FaList,
  FaUpload,
  FaShare,
  FaTrash,
  FaDownload
} from "react-icons/fa";

// Sidebar Component with Drive-like styling
const Sidebar = ({ onAddFile }) => {
  return (
    <div className="p-3" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="d-flex align-items-center mb-4">
        <h2 className="" style={{fontSize:"30px"}}>File</h2>
      </div>
      
      <div className="mb-4 d-none d-md-block">
        <button 
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
          onClick={onAddFile}
        >
          <FaFolderPlus className="me-2" /> New
        </button>
      </div>
      
      <ul className="list-unstyled">
        <li className="my-2 py-2 px-3 rounded hover-bg">
          <div className="d-flex align-items-center">
            <FaFolder className="text-warning me-2" />
            <span className="d-none d-md-inline">My Drive</span>
          </div>
        </li>
        <li className="my-2 py-2 px-3 rounded hover-bg">
          <div className="d-flex align-items-center">
            <FaStar className="text-warning me-2" />
            <span className="d-none d-md-inline">Starred</span>
          </div>
        </li>
        <li className="my-2 py-2 px-3 rounded hover-bg">
          <div className="d-flex align-items-center">
            <FaTrash className="text-secondary me-2" />
            <span className="d-none d-md-inline">Trash</span>
          </div>
        </li>
        <li className="my-2 py-2 px-3 rounded hover-bg">
          <div className="d-flex align-items-center">
            <FaFilePdf className="text-danger me-2" />
            <span className="d-none d-md-inline">PDFs</span>
          </div>
        </li>
        <li className="my-2 py-2 px-3 rounded hover-bg">
          <div className="d-flex align-items-center">
            <FaFileImage className="text-success me-2" />
            <span className="d-none d-md-inline">Images</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

// FileContent Component with Drive-like styling
const FileContent = () => {
  const [files, setFiles] = useState([
    {
      name: "Secret Document",
      size: "7.4 MB",
      type: "PDF",
      modified: "Mar 15, 2025",
      starred: true,
      icon: <FaFilePdf className="text-danger" />,
    },
    {
      name: "Rewards Program",
      size: "1.2 MB",
      type: "PDF",
      modified: "Jan 10, 2025",
      starred: false,
      icon: <FaFilePdf className="text-danger" />,
    },
    {
      name: "Vacation Photos",
      size: "1.8 MB",
      type: "Image",
      modified: "Aug 25, 2025",
      starred: false,
      icon: <FaFileImage className="text-success" />,
    },
    {
      name: "Resume",
      size: "500 KB",
      type: "Word",
      modified: "Apr 21, 2025",
      starred: false,
      icon: <FaFileAlt className="text-info" />,
    },
    {
      name: "Project Notes",
      size: "2 MB",
      type: "Text",
      modified: "Oct 12, 2025",
      starred: false,
      icon: <FaFileAlt className="text-secondary" />,
    },
  ]);

  const [showAddFileModal, setShowAddFileModal] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [newFileType, setNewFileType] = useState("PDF");
  const [uploadFile, setUploadFile] = useState(null);

  // Sample data for recent folders
  const recentFolders = [
    { name: "Personal Assets", icon: <FaFolder className="text-warning" />, count: 10, color: "bg-warning-light" },
    { name: "Documents", icon: <FaFolder className="text-primary" />, count: 3, color: "bg-primary-light" },
    { name: "Images", icon: <FaFolder className="text-success" />, count: 8, color: "bg-success-light" },
    { name: "Projects", icon: <FaFolder className="text-danger" />, count: 5, color: "bg-danger-light" },
  ];

  const handleAddFile = () => {
    setShowAddFileModal(true);
  };

  const handleAddFileSubmit = (e) => {
    e.preventDefault();
    if (!newFileName) return;
    
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    
    const newFile = {
      name: newFileName,
      size: "1.0 MB",
      type: newFileType,
      modified: formattedDate,
      starred: false,
      icon: newFileType === "PDF" 
        ? <FaFilePdf className="text-danger" /> 
        : newFileType === "Image" 
          ? <FaFileImage className="text-success" /> 
          : <FaFileAlt className="text-info" />
    };
    
    setFiles([...files, newFile]);
    setNewFileName("");
    setShowAddFileModal(false);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    if (!uploadFile) return;
    
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    
    const fileType = uploadFile.name.split('.').pop().toUpperCase();
    const sizeInMB = (uploadFile.size / (1024 * 1024)).toFixed(1);
    
    const newFile = {
      name: uploadFile.name,
      size: `${sizeInMB} MB`,
      type: fileType,
      modified: formattedDate,
      starred: false,
      icon: fileType === "PDF" 
        ? <FaFilePdf className="text-danger" /> 
        : ["JPG", "PNG", "GIF"].includes(fileType)
          ? <FaFileImage className="text-success" /> 
          : <FaFileAlt className="text-info" />
    };
    
    setFiles([...files, newFile]);
    setUploadFile(null);
    
    // Reset file input
    document.getElementById('fileUpload').value = '';
  };

  return (
    <div className="p-3">
      {/* Add File Modal */}
      {showAddFileModal && (
        <div className="modal-backdrop" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1050,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="modal-content bg-white p-4 rounded" style={{ width: '400px', maxWidth: '90%' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Add New File</h5>
              <button 
                className="btn-close" 
                onClick={() => setShowAddFileModal(false)}
              ></button>
            </div>
            <form onSubmit={handleAddFileSubmit}>
              <div className="mb-3">
                <label htmlFor="fileName" className="form-label">File Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fileName"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fileType" className="form-label">File Type</label>
                <select
                  className="form-select"
                  id="fileType"
                  value={newFileType}
                  onChange={(e) => setNewFileType(e.target.value)}
                >
                  <option value="PDF">PDF</option>
                  <option value="Image">Image</option>
                  <option value="Text">Text</option>
                </select>
              </div>
              <div className="d-flex justify-content-end">
                <button 
                  type="button" 
                  className="btn btn-secondary me-2"
                  onClick={() => setShowAddFileModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">Add File</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Upload File Modal */}
      {uploadFile && (
        <div className="modal-backdrop" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1050,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="modal-content bg-white p-4 rounded" style={{ width: '400px', maxWidth: '90%' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Upload File</h5>
              <button 
                className="btn-close" 
                onClick={() => setUploadFile(null)}
              ></button>
            </div>
            <div className="mb-3">
              <p>File: {uploadFile.name}</p>
              <p>Size: {(uploadFile.size / (1024 * 1024)).toFixed(2)} MB</p>
            </div>
            <div className="d-flex justify-content-end">
              <button 
                type="button" 
                className="btn btn-secondary me-2"
                onClick={() => setUploadFile(null)}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleFileUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header / Navbar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center mb-3 mb-md-0 w-100">
          <h4 className="mb-0 me-3 d-none d-md-block">File</h4>
          <div className="input-group w-100" style={{ maxWidth: '400px' }}>
            <span className="input-group-text bg-white">
              <FaSearch className="text-muted" />
            </span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search in Drive" 
            />
          </div>
        </div>
        <div className="d-flex w-100 w-md-auto justify-content-between justify-content-md-end">
          <form className="me-2">
            <label htmlFor="fileUpload" className="btn btn-light d-flex align-items-center mb-0">
              <FaUpload className="me-2" /> <span className="d-none d-md-inline">Upload</span>
              <input 
                type="file" 
                id="fileUpload" 
                style={{ display: 'none' }} 
                onChange={(e) => setUploadFile(e.target.files[0])}
              />
            </label>
          </form>
          <button className="btn btn-light me-2 d-none d-md-block">
            <FaTh />
          </button>
          <button className="btn btn-light d-none d-md-block">
            <FaList />
          </button>
        </div>
      </div>

      {/* Recent Folders */}
      <h5 className="mb-3">Folders</h5>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3 mb-4 justify-content-between">
        {recentFolders.map((folder, idx) => (
          <div className="col" style={{width:"25%"}} key={idx}>
            <div className={`card h-100 border-0 ${folder.color} hover-shadow`}>
              <div className="card-body text-center">
                <div className="fs-2 mb-2">{folder.icon}</div>
                <h6 className="card-title text-truncate">{folder.name}</h6>
                <p className="card-text small text-muted d-none d-md-block">{folder.count} items</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Files Table */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
        <h5 className="mb-3 mb-md-0">Files</h5>
        <div className="d-flex">
          <div className="me-3">
            <label htmlFor="sortBy" className="me-2 small d-none d-md-inline">
              Sort:
            </label>
            <select
              id="sortBy"
              className="form-select form-select-sm d-inline-block"
              style={{ width: 'auto' }}
            >
              <option>Name</option>
              <option>Modified</option>
              <option>Size</option>
              <option>Type</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table align-middle table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col" className="d-none d-md-table-cell">Size</th>
              <th scope="col" className="d-none d-md-table-cell">Type</th>
              <th scope="col" className="d-none d-md-table-cell">Modified</th>
              <th scope="col" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, idx) => (
              <tr key={idx}>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="me-3">{file.icon}</span>
                    <span className="text-truncate" style={{maxWidth: '150px'}}>{file.name}</span>
                    {file.starred && <FaStar className="text-warning ms-2" size={14} />}
                  </div>
                </td>
                <td className="text-muted d-none d-md-table-cell">{file.size}</td>
                <td className="text-muted d-none d-md-table-cell">{file.type}</td>
                <td className="text-muted d-none d-md-table-cell">{file.modified}</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-sm btn-light me-1">
                      <FaShare size={14} />
                    </button>
                    <button className="btn btn-sm btn-light me-1">
                      <FaDownload size={14} />
                    </button>
                    <button className="btn btn-sm btn-light">
                      <FaEllipsisV size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3">
        <div className="text-muted small mb-2 mb-md-0">
          Showing 1 to {files.length} of {files.length} items
        </div>
        <nav>
          <ul className="pagination pagination-sm mb-0">
            <li className="page-item disabled">
              <button className="page-link">Previous</button>
            </li>
            <li className="page-item active">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Main FileManager Component
const FileManager = () => {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* Sidebar Column - Hidden on mobile, shown on tablet and up */}
        <div
          className="col-12 col-md-3 col-lg-2 border-end d-none d-md-block"
          style={{ minHeight: "100vh", backgroundColor: '#f8f9fa' }}
        >
          <Sidebar onAddFile={() => document.getElementById('fileUpload').click()} />
        </div>
        {/* Main Content Column - Full width on mobile, adjusted on tablet and up */}
        <div className="col-12 col-md-9 col-lg-10 p-3" style={{ backgroundColor: '#fff' }}>
          <FileContent />
        </div>
      </div>
    </div>
  );
};

// Add these styles to your CSS
const styles = `
  .hover-bg:hover {
    background-color: #e9ecef;
    cursor: pointer;
  }
  .hover-shadow:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.2s ease;
  }
  .bg-warning-light {
    background-color: rgba(255, 193, 7, 0.1);
  }
  .bg-primary-light {
    background-color: rgba(13, 110, 253, 0.1);
  }
  .bg-success-light {
    background-color: rgba(25, 135, 84, 0.1);
  }
  .bg-danger-light {
    background-color: rgba(220, 53, 69, 0.1);
  }
  .bg-info-light {
    background-color: rgba(13, 202, 240, 0.1);
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1050;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    width: 400px;
    max-width: 90%;
  }
`;

export default FileManager;

// Add the styles to the head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);