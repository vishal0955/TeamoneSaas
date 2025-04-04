import React from "react";
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
const Sidebar = () => {
  return (
    <div className="p-3" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="d-flex align-items-center mb-4">
        <h2 className="" style={{fontSize:"30px"}}>File</h2>
      </div>
      
      <div className="mb-4 d-none d-md-block">
        <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center">
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
  // Sample data for recent folders and files
  const recentFolders = [
    { name: "Personal Assets", icon: <FaFolder className="text-warning" />, count: 10, color: "bg-warning-light" },
    { name: "Documents", icon: <FaFolder className="text-primary" />, count: 3, color: "bg-primary-light" },
    { name: "Images", icon: <FaFolder className="text-success" />, count: 8, color: "bg-success-light" },
    { name: "Projects", icon: <FaFolder className="text-danger" />, count: 5, color: "bg-danger-light" },
  ];

  const files = [
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
  ];

  return (
    <div className="p-3">
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
          <button className="btn btn-light me-2 d-flex align-items-center">
            <FaUpload className="me-2" /> <span className="d-none d-md-inline">Upload</span>
          </button>
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
          <Sidebar />
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
`;

export default FileManager;

// Add the styles to the head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);