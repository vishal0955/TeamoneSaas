import React, { useState, useRef } from 'react';

const QuoteTemplateInterface = () => {
  // State for form fields
  const [quoteTemplate, setQuoteTemplate] = useState('Quote Master Main');
  const [quoteName, setQuoteName] = useState('test');
  const [domain, setDomain] = useState('email.bpav.global');
  const [contentSlug, setContentSlug] = useState('ZyGeRcxZY8');
  const [expirationDate, setExpirationDate] = useState('In 30 days (24 January 2025)');
  const [quoteLanguage, setQuoteLanguage] = useState('English');
  const [locale, setLocale] = useState('English - United Kingdom');
  const [buyerComments, setBuyerComments] = useState('');
  const [purchaseTerms, setPurchaseTerms] = useState('');
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  
  // Ref for the textarea
  const textareaRef = useRef(null);

  // Computed quote URL
  const quoteUrl = `https://${domain}/${contentSlug}`;

  // Function to apply formatting to selected text
  const applyFormatting = (command, value = null) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = buyerComments.substring(start, end);
    let formattedText = '';

    switch (command) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'underline':
        formattedText = `_${selectedText}_`;
        break;
      case 'strikethrough':
        formattedText = `~~${selectedText}~~`;
        break;
      case 'link':
        const url = prompt('Enter URL:', 'https://');
        if (url) {
          formattedText = `[${selectedText}](${url})`;
        } else {
          return; // User cancelled
        }
        break;
      case 'image':
        const imageUrl = prompt('Enter image URL:', 'https://');
        if (imageUrl) {
          formattedText = `![${selectedText || 'Image'}](${imageUrl})`;
        } else {
          return; // User cancelled
        }
        break;
      case 'heading':
        formattedText = `## ${selectedText}`;
        break;
      case 'list':
        // Split selected text by new lines and add bullet points
        formattedText = selectedText.split('\n').map(line => `• ${line}`).join('\n');
        break;
      case 'numbered-list':
        // Split selected text by new lines and add numbers
        formattedText = selectedText.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
        break;
      case 'quote':
        formattedText = selectedText.split('\n').map(line => `> ${line}`).join('\n');
        break;
      default:
        return;
    }

    // Replace the selected text with the formatted text
    const newText = buyerComments.substring(0, start) + formattedText + buyerComments.substring(end);
    setBuyerComments(newText);

    // Reset focus and selection
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + formattedText.length);
    }, 0);
  };

  // CSS styles
  const styles = {
    bpavQuoteContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    bpavFormSection: {
      marginBottom: '20px',
    },
    bpavLabelRequired: {
      position: 'relative',
    },
    bpavInfoIcon: {
      color: '#6c757d',
      fontSize: '14px',
      marginLeft: '5px',
      cursor: 'pointer',
    },
    bpavQuotePreview: {
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      padding: '10px',
    },
    bpavQuoteDocument: {
      backgroundColor: '#8de0e6',
      color: '#333',
      borderRadius: '5px',
      overflow: 'hidden',
      marginBottom: '15px',
    },
    bpavQuoteHeader: {
      padding: '20px',
      position: 'relative',
    },
    bpavQuoteLogo: {
      maxWidth: '120px',
      marginBottom: '15px',
    },
    bpavQuoteTest: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    bpavQuoteNumber: {
      fontSize: '16px',
      marginBottom: '15px',
    },
    bpavQuoteDates: {
      marginBottom: '10px',
      fontSize: '14px',
    },
    bpavQuoteCompanyInfo: {
      textAlign: 'right',
      fontSize: '12px',
    },
    bpavQuotePrepared: {
      padding: '15px 20px',
    },
    bpavQuoteFooter: {
      backgroundColor: '#e0f7f9',
      padding: '15px',
      textAlign: 'center',
      fontSize: '12px',
    },
    bpavPartnerLogos: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '10px',
    },
    bpavPartnerLogo: {
      width: '40px',
      height: '40px',
      backgroundColor: '#ddd',
      borderRadius: '5px',
    },
    bpavVideoPreview: {
      backgroundColor: '#495057',
      height: '90px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    bpavTextEditorToolbar: {
      backgroundColor: '#f8f9fa',
      padding: '5px',
      borderRadius: '4px',
      marginBottom: '5px',
    },
    bpavToolbarBtn: {
      background: 'none',
      border: 'none',
      color: '#6c757d',
      cursor: 'pointer',
      padding: '3px 8px',
      fontSize: '14px',
    },
    bpavDropdownBtn: {
      color: '#0dcaf0',
      border: 'none',
      background: 'none',
      fontSize: '14px',
      cursor: 'pointer',
    },
    bpavMoreOptionsMenu: {
      display: showMoreOptions ? 'block' : 'none',
      position: 'absolute',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '4px',
      zIndex: 1000,
      padding: '5px 0',
    },
    bpavMoreOptionItem: {
      padding: '5px 15px',
      cursor: 'pointer',
      fontSize: '14px',
      color: '#6c757d',
    },
    bpavFormattedPreview: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: 'white',
      border: '1px solid #dee2e6',
      borderRadius: '4px',
      minHeight: '100px',
    },
    activeBtn: {
      color: '#0dcaf0',
      fontWeight: 'bold',
    },
  };

  // Convert markdown-style formatting to HTML for preview
  const formatPreview = (text) => {
    if (!text) return '';
    
    let formatted = text;
    // Bold
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Underline
    formatted = formatted.replace(/_(.*?)_/g, '<u>$1</u>');
    // Strikethrough
    formatted = formatted.replace(/~~(.*?)~~/g, '<s>$1</s>');
    // Links
    formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    // Images
    formatted = formatted.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="max-width:100%;">');
    // Headings
    formatted = formatted.replace(/## (.*?)\n/g, '<h2>$1</h2>');
    // Bullet lists
    formatted = formatted.replace(/• (.*?)(\n|$)/g, '<li>$1</li>');
    if (formatted.includes('<li>')) {
      formatted = formatted.replace(/(<li>.*?<\/li>)+/g, '<ul>$&</ul>');
    }
    // Numbered lists
    formatted = formatted.replace(/\d+\. (.*?)(\n|$)/g, '<li>$1</li>');
    if (formatted.includes('<li>') && !formatted.includes('<ul>')) {
      formatted = formatted.replace(/(<li>.*?<\/li>)+/g, '<ol>$&</ol>');
    }
    // Block quotes
    formatted = formatted.replace(/> (.*?)(\n|$)/g, '<blockquote>$1</blockquote>');
    
    // Replace new lines with <br> for remaining text
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
  };

  return (
    <div style={styles.bpavQuoteContainer}>
      <div className="row">
        {/* Left Form Panel */}
        <div className="col-md-6">
          <form className="bpav-quote-form">
            {/* Quote Template */}
            <div style={styles.bpavFormSection}>
              <label htmlFor="quoteTemplate" className="form-label">
                Quote template <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <select
                  className="form-select"
                  id="quoteTemplate"
                  value={quoteTemplate}
                  onChange={(e) => setQuoteTemplate(e.target.value)}
                >
                  <option>Quote Master Main</option>
                </select>
              </div>
              <div className="mt-2">
                <a href="#" className="text-decoration-none">
                  <span className="text-info">Manage quote templates</span>
                  <i className="bi bi-box-arrow-up-right text-info ms-1"></i>
                </a>
              </div>
            </div>

            {/* Quote Name */}
            <div style={styles.bpavFormSection}>
              <label htmlFor="quoteName" className="form-label">
                Quote name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="quoteName"
                value={quoteName}
                onChange={(e) => setQuoteName(e.target.value)}
              />
            </div>

            {/* Domain and Content */}
            <div className="row" style={styles.bpavFormSection}>
              <div className="col-md-6">
                <label htmlFor="domain" className="form-label">
                  Domain <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text">https://</span>
                  <input
                    type="text"
                    className="form-control"
                    id="domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="contentSlug" className="form-label">
                  Content slug <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contentSlug"
                  value={contentSlug}
                  onChange={(e) => setContentSlug(e.target.value)}
                />
              </div>
            </div>

            {/* Quote URL */}
            <div style={styles.bpavFormSection}>
              <label htmlFor="quoteUrl" className="form-label">
                Quote URL
              </label>
              <input
                type="text"
                className="form-control"
                id="quoteUrl"
                value={quoteUrl}
                readOnly
              />
            </div>

            {/* Expiration Date */}
            <div style={styles.bpavFormSection}>
              <label htmlFor="expirationDate" className="form-label">
                Expiration date <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                id="expirationDate"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              >
                <option>In 30 days (24 January 2025)</option>
              </select>
            </div>

            {/* Language and Locale */}
            <div className="row" style={styles.bpavFormSection}>
              <div className="col-md-6">
                <label htmlFor="quoteLanguage" className="form-label">
                  Quote language <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  id="quoteLanguage"
                  value={quoteLanguage}
                  onChange={(e) => setQuoteLanguage(e.target.value)}
                >
                  <option>English</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="locale" className="form-label">
                  Locale
                </label>
                <select
                  className="form-select"
                  id="locale"
                  value={locale}
                  onChange={(e) => setLocale(e.target.value)}
                >
                  <option>English - United Kingdom</option>
                </select>
              </div>
            </div>

            {/* Comments to Buyer */}
            <div style={styles.bpavFormSection}>
              <label htmlFor="buyerComments" className="form-label">
                Comments to buyer
              </label>
              <div style={styles.bpavTextEditorToolbar} className="position-relative">
                <button 
                  type="button" 
                  style={{...styles.bpavToolbarBtn, ...(buyerComments.includes('**') ? styles.activeBtn : {})}} 
                  onClick={() => applyFormatting('bold')}
                  title="Bold"
                >
                  <i className="bi bi-type-bold"></i>
                </button>
                <button 
                  type="button" 
                  style={{...styles.bpavToolbarBtn, ...(buyerComments.includes('*') ? styles.activeBtn : {})}} 
                  onClick={() => applyFormatting('italic')}
                  title="Italic"
                >
                  <i className="bi bi-type-italic"></i>
                </button>
                <button 
                  type="button" 
                  style={{...styles.bpavToolbarBtn, ...(buyerComments.includes('_') ? styles.activeBtn : {})}} 
                  onClick={() => applyFormatting('underline')}
                  title="Underline"
                >
                  <i className="bi bi-type-underline"></i>
                </button>
                <button 
                  type="button" 
                  style={{...styles.bpavToolbarBtn, ...(buyerComments.includes('~~') ? styles.activeBtn : {})}} 
                  onClick={() => applyFormatting('strikethrough')}
                  title="Strikethrough"
                >
                  <i className="bi bi-type-strikethrough"></i>
                </button>
                <button 
                  type="button" 
                  style={styles.bpavDropdownBtn}
                  onClick={() => setShowMoreOptions(!showMoreOptions)}
                >
                  More
                </button>
                <button 
                  type="button" 
                  style={{...styles.bpavToolbarBtn, ...(buyerComments.includes('](') ? styles.activeBtn : {})}} 
                  onClick={() => applyFormatting('link')}
                  title="Insert Link"
                >
                  <i className="bi bi-link-45deg"></i>
                </button>
                <button 
                  type="button" 
                  style={{...styles.bpavToolbarBtn, ...(buyerComments.includes('![') ? styles.activeBtn : {})}} 
                  onClick={() => applyFormatting('image')}
                  title="Insert Image"
                >
                  <i className="bi bi-image"></i>
                </button>
                
                {/* More options dropdown */}
                <div style={styles.bpavMoreOptionsMenu} className="mt-1">
                  <div 
                    style={styles.bpavMoreOptionItem} 
                    onClick={() => {
                      applyFormatting('heading');
                      setShowMoreOptions(false);
                    }}
                  >
                    <i className="bi bi-type-h2 me-2"></i> Heading
                  </div>
                  <div 
                    style={styles.bpavMoreOptionItem} 
                    onClick={() => {
                      applyFormatting('list');
                      setShowMoreOptions(false);
                    }}
                  >
                    <i className="bi bi-list-ul me-2"></i> Bullet List
                  </div>
                  <div 
                    style={styles.bpavMoreOptionItem} 
                    onClick={() => {
                      applyFormatting('numbered-list');
                      setShowMoreOptions(false);
                    }}
                  >
                    <i className="bi bi-list-ol me-2"></i> Numbered List
                  </div>
                  <div 
                    style={styles.bpavMoreOptionItem} 
                    onClick={() => {
                      applyFormatting('quote');
                      setShowMoreOptions(false);
                    }}
                  >
                    <i className="bi bi-blockquote-left me-2"></i> Blockquote
                  </div>
                </div>
              </div>
              <textarea
                className="form-control"
                id="buyerComments"
                rows="4"
                placeholder="Enter any extra notes that you would like to appear in this quote."
                value={buyerComments}
                onChange={(e) => setBuyerComments(e.target.value)}
                ref={textareaRef}
              ></textarea>
              
              {/* Preview section - only show if there's content */}
              {buyerComments && (
                <div className="mt-2">
                  <small className="text-muted">Preview:</small>
                  <div 
                    style={styles.bpavFormattedPreview}
                    dangerouslySetInnerHTML={{ __html: formatPreview(buyerComments) }}
                  ></div>
                </div>
              )}
            </div>

            {/* Purchase Terms */}
            <div style={styles.bpavFormSection}>
              <label htmlFor="purchaseTerms" className="form-label">
                Purchase terms
              </label>
              <textarea
                className="form-control"
                id="purchaseTerms"
                rows="4"
                placeholder="Enter any relevant information about pricing, purchasing terms, and/or global agreements."
                value={purchaseTerms}
                onChange={(e) => setPurchaseTerms(e.target.value)}
              ></textarea>
            </div>
          </form>
        </div>

        {/* Right Preview Panel */}
        <div className="col-md-6">
          <div style={styles.bpavQuotePreview}>
            {/* Quote Document Preview */}
            <div style={styles.bpavQuoteDocument}>
              <div style={styles.bpavQuoteHeader}>
                <div className="row">
                  <div className="col-md-7">
                    <div style={styles.bpavQuoteLogo}>BPAV</div>
                    <div style={styles.bpavQuoteTest}>TEST</div>
                    <div style={styles.bpavQuoteNumber}>#20241225-231724666</div>
                    <div style={styles.bpavQuoteDates}>
                      <div>
                        Issued
                        <br />
                        25 December 2024
                      </div>
                      <div>
                        Expires
                        <br />
                        24 January 2025
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div style={styles.bpavQuoteCompanyInfo}>
                      BPAV Technology Group Ltd
                      <br />
                      Ground Floor, Unit C1
                      <br />
                      Fairoaks Airport, Chobham, Woking Way
                      <br />
                      Basingstoke, Hampshire RG24 8QT
                      <br />
                      United Kingdom
                      <br />
                      <br />
                      Sales: +44 (0)1234 567890
                      <br />
                      (UK) +44 333 343 3101
                      <br />
                      (USA) +1(347)352-9627
                      <br />
                      hello@bpav.global
                      <br />
                      Reg No. 12345678
                      <br />
                      VAT No. 431398144
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-7"></div>
                  <div className="col-md-5 text-end">
                    <div>
                      Benjamin Price
                      <br />
                      ben.price@bpav.global
                    </div>
                  </div>
                </div>
              </div>
              <div style={styles.bpavQuotePrepared} className="p-3">
                <strong>Prepared for</strong>
                <div>{quoteName}</div>
                <div className="mt-2">
                  <strong>Test Unknown</strong>
                  <br />
                  test@test.com
                  <br />
                  12345678901234567890123456789012345
                </div>
                
                {/* Display formatted buyer comments if any */}
                {buyerComments && (
                  <div className="mt-3">
                    <strong>Comments:</strong>
                    <div dangerouslySetInnerHTML={{ __html: formatPreview(buyerComments) }}></div>
                  </div>
                )}
              </div>
            </div>

            {/* Company Info Section */}
            <div style={styles.bpavQuoteFooter}>
              BPAV
              <br />
              <p>
                BPAV Technology Group Ltd is a leading independent multidisciplinary technology consultancy &
                <br />
                software development company specializing in the design and implementation of commercial audio
                <br />
                visual, broadcast, communications and media technology solutions.
                <br />
                We innovate, create, listen and solve.
              </p>

              <div style={styles.bpavPartnerLogos}>
                <div style={styles.bpavPartnerLogo}></div>
                <div style={styles.bpavPartnerLogo}></div>
                <div style={styles.bpavPartnerLogo}></div>
                <div style={styles.bpavPartnerLogo}></div>
              </div>
            </div>

            {/* Video Preview */}
            <div style={styles.bpavVideoPreview} className="mt-3">
              <i className="bi bi-play-circle"></i> BPAV Technology Group: We innovate, create, listen and solve
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteTemplateInterface;