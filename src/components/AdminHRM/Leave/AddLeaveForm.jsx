const AddLeaveForm = () => {
    return (
      <>
        <div className="container">
          <div className="leave-form-container">
            <form>
              <div className="row mb-4">
                {/* Employee Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Employee Name</label>
                  <select className="form-select">
                    <option selected disabled>
                      Select
                    </option>
                    <option>Employee 1</option>
                    <option>Employee 2</option>
                    <option>Employee 3</option>
                  </select>
                </div>
                {/* Leave Type */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Leave Type</label>
                  <select className="form-select">
                    <option selected disabled>
                      Select
                    </option>
                    <option>Annual Leave</option>
                    <option>Sick Leave</option>
                    <option>Unpaid Leave</option>
                  </select>
                </div>
                {/* From Date */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">From</label>
                  <input type="date" className="form-control" />
                </div>
                {/* To Date */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">To</label>
                  <input type="date" className="form-control" />
                </div>
                {/* No of Days */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">No of Days</label>
                  <input type="number" className="form-control" placeholder="Enter number of days" />
                </div>
                {/* Remaining Days */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Remaining Days</label>
                  <input type="text" className="form-control" value="8" disabled />
                </div>
                {/* Reason */}
                <div className="col-12 mb-4">
                  <label className="form-label">Reason</label>
                  <textarea className="form-control" rows={4} placeholder="Enter reason..." />
                </div>
              </div>
              {/* Form Actions */}
              <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-light">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Leave
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default AddLeaveForm;
  