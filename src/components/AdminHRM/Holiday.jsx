// import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash, faSearch, faPlus, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const HolidaysList = () => {
//   const [holidays, setHolidays] = useState([
//     { id: 1, title: 'New Year', date: '01 Jan 2024', description: 'First day of the new year', status: 'Active' },
//     { id: 2, title: 'Martin Luther King Jr. Day', date: '15 Jan 2024', description: 'Celebrating the civil rights leader', status: 'Active' },
//     { id: 3, title: 'President\'s Day', date: '19 Feb 2024', description: 'Honoring past US Presidents', status: 'Active' },
//     { id: 4, title: 'Good Friday', date: '29 Mar 2024', description: 'Holiday before Easter', status: 'Active' },
//     { id: 5, title: 'Easter Monday', date: '01 Apr 2024', description: 'Holiday after Easter', status: 'Active' },
//     { id: 6, title: 'Memorial Day', date: '27 Apr 2024', description: 'Honors military personnel', status: 'Active' },
//     { id: 7, title: 'Independence Day', date: '04 Jul 2024', description: 'Celebrates Independence', status: 'Active' },
//     { id: 8, title: 'Labour Day', date: '02 Sep 2024', description: 'Honors working people', status: 'Inactive' },
//     { id: 9, title: 'Veterans Day', date: '11 Nov 2024', description: 'Honors military veterans', status: 'Active' },
//     { id: 10, title: 'Christmas Day', date: '25 Dec 2024', description: 'Celebration of Christmas', status: 'Active' }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);

//   // Filter holidays based on search term
//   const filteredHolidays = holidays.filter(holiday =>
//     holiday.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     holiday.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const totalPages = Math.ceil(filteredHolidays.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const paginatedHolidays = filteredHolidays.slice(startIndex, startIndex + rowsPerPage);

//   return (
//     <div className="container-fluid p-3">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2 className="mb-0">Holidays</h2>
//         <button className="btn btn-danger text-white" onClick={() => alert('Add Holiday clicked')}>
//           <FontAwesomeIcon icon={faPlus} className="me-2" />
//           Add Holiday
//         </button>
//       </div>

//       <div className="d-flex align-items-center mb-2">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb mb-0">
//             <li className="breadcrumb-item">
//               <a href="#" className="text-decoration-none">Employee</a>
//             </li>
//             <li className="breadcrumb-item active" aria-current="page">Holidays</li>
//           </ol>
//         </nav>
//       </div>

//       <div className="card">
//         <div className="card-header bg-white">
//           <h5 className="mb-0">Holidays List</h5>
//         </div>
//         <div className="card-body">
//           <div className="row mb-3">
//             <div className="col-md-6 col-sm-12 d-flex align-items-center">
//               <div className="d-flex align-items-center">
//                 <span className="me-2">Row Per Page</span>
//                 <select 
//                   className="form-select form-select-sm me-3" 
//                   style={{ width: "70px" }}
//                   value={rowsPerPage}
//                   onChange={(e) => setRowsPerPage(Number(e.target.value))}
//                 >
//                   <option value="5">5</option>
//                   <option value="10">10</option>
//                   <option value="25">25</option>
//                   <option value="50">50</option>
//                 </select>
//               </div>
//               <span className="me-2">Entries</span>
//             </div>
//             <div className="col-md-6 col-sm-12 mt-sm-2 mt-md-0">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <button className="btn btn-outline-secondary" type="button">
//                   <FontAwesomeIcon icon={faSearch} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="table-responsive">
//             <table className="table table-bordered table-hover">
//               <thead className="table-light">
//                 <tr>
//                   <th style={{ width: "30px" }}>#</th>
//                   <th>Title</th>
//                   <th>Date</th>
//                   <th>Description</th>
//                   <th>Status</th>
//                   <th style={{ width: "80px" }}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedHolidays.map((holiday) => (
//                   <tr key={holiday.id}>
//                     <td>
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="checkbox"
//                           value=""
//                           id={`holiday-${holiday.id}`}
//                         />
//                       </div>
//                     </td>
//                     <td>{holiday.title}</td>
//                     <td>{holiday.date}</td>
//                     <td>{holiday.description}</td>
//                     <td>
//                       <span className={`badge ${holiday.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
//                         {holiday.status}
//                       </span>
//                     </td>
//                     <td>
//                       <button className="btn btn-sm text-primary border-0 me-1" title="Edit">
//                         <FontAwesomeIcon icon={faEdit} />
//                       </button>
//                       <button className="btn btn-sm text-danger border-0" title="Delete">
//                         <FontAwesomeIcon icon={faTrash} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="d-flex justify-content-between align-items-center mt-3">
//             <div>
//               Showing {startIndex + 1} - {Math.min(startIndex + rowsPerPage, filteredHolidays.length)} of {filteredHolidays.length} entries
//             </div>
//             <nav>
//               <ul className="pagination mb-0">
//                 <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                   <button 
//                     className="page-link" 
//                     onClick={() => setCurrentPage(currentPage - 1)}
//                     disabled={currentPage === 1}
//                   >
//                     <FontAwesomeIcon icon={faChevronLeft} />
//                   </button>
//                 </li>
//                 {[...Array(totalPages)].map((_, i) => (
//                   <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
//                     <button 
//                       className="page-link" 
//                       onClick={() => setCurrentPage(i + 1)}
//                     >
//                       {i + 1}
//                     </button>
//                   </li>
//                 ))}
//                 <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                   <button 
//                     className="page-link" 
//                     onClick={() => setCurrentPage(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                   >
//                     <FontAwesomeIcon icon={faChevronRight} />
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HolidaysList;
import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Holidays = () => {
  const [holidays, setHolidays] = useState([
    {
      id: 1,
      title: "New Year",
      date: "01 Jan 2024",
      description: "First day of the new year",
      status: "Active",
    },
    { id: 2, title: 'Martin Luther King Jr. Day', date: '15 Jan 2024', description: 'Celebrating the civil rights leader', status: 'Active' },
        { id: 3, title: 'President\'s Day', date: '19 Feb 2024', description: 'Honoring past US Presidents', status: 'Active' },
        { id: 4, title: 'Good Friday', date: '29 Mar 2024', description: 'Holiday before Easter', status: 'Active' },
        { id: 5, title: 'Easter Monday', date: '01 Apr 2024', description: 'Holiday after Easter', status: 'Active' },
        { id: 6, title: 'Memorial Day', date: '27 Apr 2024', description: 'Honors military personnel', status: 'Active' },
        { id: 7, title: 'Independence Day', date: '04 Jul 2024', description: 'Celebrates Independence', status: 'Active' },
       
  ]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Holidays</h2>
        <button className="btn btn-dark">+ Add Holiday</button>
      </div>

      <div className="card p-3">
        <div className="d-flex justify-content-between mb-2">
          <div>
            <label className="me-2">Rows Per Page:</label>
            <select className="form-select d-inline w-auto">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          <input
            type="text"
            className="form-control w-auto"
            placeholder="Search..."
          />
        </div>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Title</th>
              <th>Date</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday) => (
              <tr key={holiday.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{holiday.title}</td>
                <td>{holiday.date}</td>
                <td>{holiday.description}</td>
                <td>
                  <span className="badge bg-success">{holiday.status}</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-secondary me-2">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-between align-items-center">
          <span>Showing 1 to {holidays.length} of {holidays.length} entries</span>
          <nav>
            <ul className="pagination mb-0">
              <li className="page-item disabled">
                <button className="page-link">&lt;</button>
              </li>
              <li className="page-item active">
                <button className="page-link">1</button>
              </li>
              <li className="page-item disabled">
                <button className="page-link">&gt;</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
