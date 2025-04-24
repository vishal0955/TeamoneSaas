import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AboutDealsForm from './AboutDealsForm';

const DealsData = () => {

      const [dealDatas, setDealDatas] = useState();

    const dealData = {
        name: "StraightIn Lead - Turning Point Management Group",
        amount: "£25,000",
        closeDate: "-/-",
        stage: "Qualified",
        pipeline: "Sales pipeline",
      };


      const contactData = {
        name: "Nikunj",
        company: "zoho.com",
        email: "message-service@sender.zoho.com",
        formData: {
          email: "nikunj.zoho@gmail.com",
          phone: "",
          company: "",
          leadStatus: "",
          lifecycleStage: "Lead",
          buyingRole: "",
          contactOwner: "",
        },
      };

      const handleCreateDeal = (dealData) => {
        // Handle the new deal data here
        console.log("New deal:", dealData);
        setIsCreateDealModalOpen(false);
      };
  const darkMode = useSelector((state) => (state.theme.isDarkMode))
  return (
    <>
    <div className={`${darkMode ? "card-dark" : 'bg-white' } my-4 bg-white h-100 border-b rounded`}>
                <div className="px-4 py-2">
                  <Link
                    to="/crm/deals"
                    className="flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Deals
                  </Link>
                  <h1 className="text-xl font-semibold mt-2">{dealData.name}</h1>
    
                  {/* Deal Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div>
                      <div>Amount:</div>
                      <div>{dealData.amount}</div>
                    </div>
                    <div>
                      <div>Close Date:</div>
                      <div>{dealData.closeDate}</div>
                    </div>
                    <div>
                      <div>Stage:</div>
                      <div className="text-green-600">{dealData.stage}</div>
                    </div>
                    <div>
                      <div>Pipeline:</div>
                      <select
                        className={`${darkMode ? "dark-mode" : 'bg-gray-100' } border rounded p-2 w-full`}
                        value={dealData.pipeline}
                        onChange={(e) =>
                          setDealDatas({ ...dealData, pipeline: e.target.value })
                        }
                      >
                        <option value="Lead">Lead</option>
                        <option value="Qualification">Qualification</option>
                        <option value="Proposal Sent">Proposal Sent</option>
                        <option value="Negotiation">Negotiation</option>
                        <option value="Closed Won">Closed Won</option>
                        <option value="Closed Lost">Closed Lost</option>
                      </select>
                    </div>
                  </div>
    
                  {/* Action Buttons */}
                  <div className="flex gap-2 my-4">
                    <button className="p-2 rounded">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>
                  </div>
    
                  <hr />
    
                  {/* About Deals Form */}
                  <div className="border rounded-lg my-4">
                    <AboutDealsForm data={contactData.formData} />
                  </div>
                </div>
              </div>
    </>
  )
}

export default DealsData