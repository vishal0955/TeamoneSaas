import React from 'react'
import "./Quotes.css"; 
const CreateQuote = () => {
  return (
    <>
    <div className="wizard-container">
  {/* Progress Steps */}
  <div className="steps-progress">
    <div className="step-item active">
      <div className="step-number">1</div>
      <span className="step-text">DEAL</span>
    </div>
    <div className="step-item">
      <div className="step-number">2</div>
      <span className="step-text">BUYER INFO</span>
    </div>
    <div className="step-item">
      <div className="step-number">3</div>
      <span className="step-text">YOUR INFO</span>
    </div>
    <div className="step-item">
      <div className="step-number">4</div>
      <span className="step-text">LINE ITEMS</span>
    </div>
    <div className="step-item">
      <div className="step-number">5</div>
      <span className="step-text">SIGNATURE &amp; PAYMENT</span>
    </div>
    <div className="step-item">
      <div className="step-number">6</div>
      <span className="step-text">TEMPLATE &amp; DETAILS</span>
    </div>
  </div>
  {/* Main Content */}
  <div className="content-wrapper">
    {/* Left Section */}
    <div className="form-section">
      <h2 className="section-title">Deal</h2>
      <p className="section-description">
        Associate with a deal
        <br />
        Once a deal is associated with a quote in this wizard, any changes you
        make will affect both the quote and the deal.
      </p>
      <div className="form-group">
        <select className="form-select">
          <option>Select existing deal...</option>
        </select>
      </div>
    </div>
    {/* Right Section */}
    <div className="preview-section">
      <h2 className="section-title">Quote Preview</h2>
      <div className="quote-preview">
        <div className="quote-number">
          NEW QUOTE
          <br />
          #JQ2M2255-25872666
        </div>
        <div className="company-info">
          BPAY Technology Group Ltd
          <br />
          123 Business Street
          <br />
          Suite 456
          <br />
          Business City, BC 12345
        </div>
      </div>
    </div>
  </div>
  {/* Action Buttons */}
  <div className="action-buttons">
    <button className="btn btn-back" disabled="">
      <i className="bi bi-arrow-left" />
      Back
    </button>
    <button className="btn btn-continue">
      Continue
      <i className="bi bi-arrow-right" />
    </button>
  </div>
</div>

    </>
  )
}

export default CreateQuote