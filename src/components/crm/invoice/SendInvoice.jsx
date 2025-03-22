import React from 'react'
import "./invoice.css"
const SendInvoice = () => {
  return (
    <>
    <div
  className="modal-custom"
  role="dialog"
  aria-labelledby="modalTitle"
  aria-modal="true"
>
  {/* Header */}
  <div className="modal-header bg-dark text-white rounded-2">
    <span className="fw-medium" id="modalTitle">
      Invoice created and ready to send!
    </span>
    <button type="button" className="close-btn" aria-label="Close modal">
      <i className="bi bi-x-lg" aria-hidden="true" />
    </button>
  </div>
  {/* Body */}
  <div className="p-4">
    <form id="sendInvoiceForm" noValidate="">
      {/* To Field */}
      <div className="mb-3">
        <label htmlFor="toField" className="form-label text-secondary mb-2">
          To
        </label>
        <input
          type="text"
          id="ccField"
          className="form-control"
          placeholder="Search recipients..."
          aria-describedby="ccHelp"
        />
      </div>
      {/* CC Field */}
      <div className="mb-3">
        <label htmlFor="ccField" className="form-label text-secondary mb-2">
          Cc
        </label>
        <input
          type="text"
          id="ccField"
          className="form-control"
          placeholder="Search recipients..."
          aria-describedby="ccHelp"
        />
        <div id="ccHelp" className="form-text visually-hidden">
          Type to search and add CC recipients
        </div>
      </div>
      {/* From Field */}
      <div className="mb-4">
        <label className="form-label text-secondary mb-2">From</label>
        <input
          type="text"
          id="ccField"
          className="form-control"
          placeholder="Benjamin Price from BPAV Technology Group Ltd 
              (accounts@bpav.com) "
          aria-describedby="ccHelp"
        />
      </div>
      {/* Help Link */}
      <div className="mb-4">
        <a href="#" className="learn-more text-dark">
          <i className="bi bi-info-circle" aria-hidden="true" />
          Learn more about sending invoices
        </a>
      </div>
      {/* Actions */}
      <div className="d-flex gap-2 mobile-stack">
        <button
          type="submit"
          className="btn btn-dark flex-grow-1 btn-mobile-full"
          id="sendBtn"
        >
          <span>Send invoice</span>
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-mobile-full"
          id="writeBtn"
        >
          Write email manually
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default SendInvoice