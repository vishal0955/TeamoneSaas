import React from 'react'

const YourInfo = () => {
  return (
    <>
    <div className="container qp-container py-4">
  <div className="row g-4">
    {/* Left Column - Your Information */}
    <div className="col-12 col-lg-12">
      <div className="qp-section">
        <h5 className="mb-4">Your Information</h5>
        <p className="text-secondary mb-3">
          Check the information about you and your company that will appear on
          the quote
        </p>
        {/* Quote Sender */}
        <div className="mb-4">
          <h6 className="text-secondary mb-3">QUOTE SENDER</h6>
          <div className="d-flex align-items-center gap-3">
            <div className="qp-avatar" />
            <div>
              <h6 className="mb-1">Benjamin Price</h6>
              <p className="text-secondary mb-1">No title</p>
              <p className="text-secondary mb-0">ben.price@bpav.global</p>
              <p className="text-secondary mb-0">+447876945809</p>
            </div>
          </div>
        </div>
        {/* Your Company */}
        <div>
          <h6 className="text-secondary mb-3">YOUR COMPANY</h6>
          <div className="mb-3">
            <select className="form-select">
              <option>XYZ Technology Group Ltd</option>
            </select>
          </div>
          <div className="text-secondary">
            <p className="mb-1">Ground Floor, Unit C1, Prisma Park, Berril,</p>
            <p className="mb-1">Basingstoke, Hampshire RG24 8GT</p>
            <p className="mb-0">United Kingdom</p>
          </div>
        </div>
      </div>
    </div>
    {/* Right Column - Quote Preview */}
    {/*  */}
  </div>
</div>
    </>
  )
}

export default YourInfo