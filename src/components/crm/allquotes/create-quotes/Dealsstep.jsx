import React from 'react'

const Dealsstep = () => {
  return (
    <>
      <div className="quote-section">
      <h2 className="quote-section-title">Deal</h2>
      <p className="quote-section-desc">Associate with a deal</p>
      <p className="quote-section-info">
        Once a deal is associated with a quote in this wizard, any changes you
        make will affect both the quote and the deal.
      </p>
      <div className="quote-form-group">
        <label className="quote-form-label">create a deal</label>
          <input className='quote-select ' type="text" placeholder='Create Deal' />
        
      </div>
    </div>
    </>
  )
}

export default Dealsstep