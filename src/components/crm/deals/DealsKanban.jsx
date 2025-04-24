import React, { useState } from "react";
import CreateDealModal from "./ADdDealForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SalesDashboard = () => {
  const navigate = useNavigate();
  // Initial state for the dashboard
  const [metrics, setMetrics] = useState({
    totalDealAmount: "£2.18M",
    totalOpenDealAmount: "£618.02K",
    totalClosedDealAmount: "£990.58K",
    newDealAmount: "£201.02K",
    mtdWonAmount: "£152.5K",
  });

  const handleDealClick = () => {
    navigate("/crm/dealdetails");
  };

  // Enhanced initial state for the deals in different stages with more deals
  const [stages, setStages] = useState({
    Qualified: [
      {
        id: 1,
        company: "Tech Solutions Ltd",
        amount: "£45,000",
        value: 45000,
        category: "Software Implementation",
        owner: "John Smith",
      },
      {
        id: 2,
        company: "Acme Industries",
        amount: "£32,000",
        value: 32000,
        category: "Hardware Upgrade",
        owner: "Emma Watson",
      },
      {
        id: 3,
        company: "Northern Retail",
        amount: "£48,000",
        value: 48000,
        category: "E-commerce Platform",
        owner: "John Smith",
      },
      {
        id: 4,
        company: "City Financial",
        amount: "£25,000",
        value: 25000,
        category: "Security Audit",
        owner: "Sarah Johnson",
      },
    ],
    "Contact Made": [
      {
        id: 5,
        company: "Global Corp Inc",
        amount: "£75,000",
        value: 75000,
        category: "Cloud Migration",
        owner: "Sarah Johnson",
      },
      {
        id: 6,
        company: "Metro Healthcare",
        amount: "£65,000",
        value: 65000,
        category: "Data Analytics",
        owner: "Robert Brown",
      },
      {
        id: 7,
        company: "Sunset Hotels",
        amount: "£40,000",
        value: 40000,
        category: "Booking System",
        owner: "Emma Watson",
      },
    ],
    "Meeting Scheduled": [
      {
        id: 8,
        company: "Quantum Research",
        amount: "£95,000",
        value: 95000,
        category: "AI Implementation",
        owner: "David Lee",
      },
      {
        id: 9,
        company: "Fresh Foods Ltd",
        amount: "£55,000",
        value: 55000,
        category: "Supply Chain Software",
        owner: "Sarah Johnson",
      },
      {
        id: 10,
        company: "Urban Transport",
        amount: "£70,000",
        value: 70000,
        category: "Mobile App",
        owner: "John Smith",
      },
      {
        id: 11,
        company: "Apex Construction",
        amount: "£100,000",
        value: 100000,
        category: "Project Management",
        owner: "Robert Brown",
      },
    ],
    Quoting: [
      {
        id: 12,
        company: "InnoTech Startups",
        amount: "£150,000",
        value: 150000,
        category: "Full Stack Development",
        owner: "Emma Watson",
      },
      {
        id: 13,
        company: "Heritage Museum",
        amount: "£100,000",
        value: 100000,
        category: "Digital Exhibits",
        owner: "David Lee",
      },
    ],
    Quoted: [
      {
        id: 14,
        company: "Spotlight Media",
        amount: "£85,000",
        value: 85000,
        category: "Content Management",
        owner: "Sarah Johnson",
      },
    ],
  });

  // For the drag and drop functionality
  const [dragging, setDragging] = useState(null);

  const handleDragStart = (e, deal) => {
    setDragging(deal);
    // Set the drag image (optional)
    if (e.dataTransfer) {
      // Create a custom ghost image (optional)
      const ghostElement = document.createElement("div");
      ghostElement.classList.add("deal-drag-ghost");
      ghostElement.textContent = deal.company;
      document.body.appendChild(ghostElement);

      e.dataTransfer.setDragImage(ghostElement, 0, 0);
      e.dataTransfer.effectAllowed = "move";

      // Clean up the ghost element after a short delay
      setTimeout(() => {
        document.body.removeChild(ghostElement);
      }, 0);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, targetStage) => {
    e.preventDefault();
    if (!dragging) return;

    // Create a copy of the stages
    const newStages = { ...stages };

    // Find and remove the deal from its current stage
    let sourceStageName = "";
    for (const [stageName, deals] of Object.entries(stages)) {
      const index = deals.findIndex((deal) => deal.id === dragging.id);
      if (index !== -1) {
        sourceStageName = stageName;
        newStages[stageName] = deals.filter((deal) => deal.id !== dragging.id);
        break;
      }
    }

    // Add the deal to the target stage
    newStages[targetStage] = [...newStages[targetStage], dragging];

    setStages(newStages);
    setDragging(null);
  };

  // Calculate stage totals
  const calculateStageTotals = () => {
    const totals = {};
    for (const [stageName, deals] of Object.entries(stages)) {
      const total = deals.reduce((sum, deal) => sum + deal.value, 0);
      totals[stageName] = formatCurrency(total);
    }
    return totals;
  };

  // Format currency helper
  const formatCurrency = (value) => {
    if (value >= 1000000) {
      return `£${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `£${(value / 1000).toFixed(2)}K`;
    }
    return `£${value.toLocaleString()}`;
  };

  // Get current stage totals
  const stageTotals = calculateStageTotals();

  // State to manage the create deal modal
  const [isCreateDealModalOpen, setIsCreateDealModalOpen] = useState(false);

  // Function to handle the creation of a new deal
  const handleCreateDeal = (dealData) => {
    // Create a new deal object
    const newDeal = {
      id:
        Math.max(
          ...Object.values(stages)
            .flat()
            .map((deal) => deal.id)
        ) + 1,
      company: dealData.company,
      amount: `£${parseInt(dealData.amount).toLocaleString()}`,
      value: parseInt(dealData.amount),
      category: dealData.category,
      owner: dealData.owner || "John Smith",
    };

    // Add the new deal to the first stage (Qualified)
    setStages((prev) => ({
      ...prev,
      Qualified: [...prev.Qualified, newDeal],
    }));

    setIsCreateDealModalOpen(false);
  };

  // Function to add a new deal
  const addNewDeal = () => {
    setIsCreateDealModalOpen(true);
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Deals</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center"
          onClick={addNewDeal}
        >
          <i className="bi bi-plus mr-2" /> New Deal
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div
          className={`${
            darkMode ? "card-dark" : null
          } p-4 rounded-lg shadow-sm border flex items-center`}
        >
          <div className="inv-stat-icon inv-stat-icon-primary">
            <i className="bi bi-currency-pound "></i>
          </div>
          <div>
            <h3 className="text-sm text-gray-500"> Total Deal Amount</h3>
            <p className="text-xl font-bold">{metrics.totalDealAmount}</p>
          </div>
        </div>

        <div
          className={`${
            darkMode ? "card-dark" : null
          } p-4 rounded-lg shadow-sm border flex items-center`}
        >
          <div className="inv-stat-icon inv-stat-icon-warning">
            <i className="bi bi-clock "></i>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Total Open Deal Amount</h3>
            <p className="text-xl font-bold">{metrics.totalOpenDealAmount}</p>
          </div>
        </div>

        <div
          className={`${
            darkMode ? "card-dark" : null
          } p-4 rounded-lg shadow-sm border flex items-center`}
        >
          <div className="inv-stat-icon inv-stat-icon-danger">
            <i className="bi bi-x-circle-fill "></i>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Total Closed Deal Amount</h3>
            <p className="text-xl font-bold">{metrics.totalClosedDealAmount}</p>
          </div>
        </div>

        <div
          className={`${
            darkMode ? "card-dark" : null
          } p-4 rounded-lg shadow-sm border flex items-center`}
        >
          <div className="inv-stat-icon inv-stat-icon-success">
            <i className="bi bi-plus-circle-fill"></i>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">New Deal Amount</h3>
            <p className="text-xl font-bold">{metrics.newDealAmount}</p>
          </div>
        </div>
      </div>

      <div className=" rounded-lg shadow-sm border p-4 mb-6">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="relative mb-3 md:mb-0 w-full md:w-1/3">
            <i className="bi bi-search absolute left-3 top-3 text-gray-400"></i>
            <input
              type="text"
              className={`${
                darkMode ? "dark-mode" : null
              } w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Search deals..."
            />
          </div>

          <div className="flex gap-3">
            <div className="w-full md:w-auto">
              <select
                className={`${
                  darkMode ? "dark-mode" : null
                } w-full md:w-auto px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option>Main Pipeline</option>
                <option>Deals Pipeline</option>
              </select>
            </div>
            {/* <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center">
              <i className="bi bi-funnel me-2"></i> Filters
            </button> */}
          </div>
        </div>

        {/* Kanban Board */}
        <div
          className="relative  pb-2"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          <div className="sticky top-0 bg-white z-10">
            <table className="min-w-full border">
              <thead>
                <tr className="border-b">
                  <th className="p-3 text-left sticky left-0 bg-white z-20">
                    Stage
                  </th>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Owner</th>
                  <th className="p-3 text-right">Amount</th>
                </tr>
              </thead>
            </table>
          </div>

          <div
            className="overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 250px)" }}
          >
            <table className="min-w-full border">
              <tbody>
                {Object.keys(stages).map((stageName) => (
                  <>
                    {stages[stageName].map((deal, index) => (
                      <tr
                        key={deal.id}
                        className="border-b hover:bg-gray-50 cursor-move"
                        draggable={true}
                        onDragStart={(e) => handleDragStart(e, deal)}
                        onClick={handleDealClick}
                      >
                        {index === 0 && (
                          <td
                            rowSpan={stages[stageName].length}
                            className="p-3 border-r align-top sticky left-0 bg-white z-10"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, stageName)}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{stageName}</span>
                              <span className="text-sm px-2 py-1 rounded-full">
                                {stages[stageName].length}
                              </span>
                            </div>
                          </td>
                        )}
                        <td className="p-3">{deal.company}</td>
                        <td className="p-3">{deal.category}</td>
                        <td className="p-3">
                          <div className="flex items-center text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <span>{deal.owner}</span>
                          </div>
                        </td>
                        <td className="p-3 text-right">{deal.amount}</td>
                      </tr>
                    ))}
                    <tr className="border-b bg-gray-50">
                      <td
                        colSpan={4}
                        className="p-3 text-xs text-gray-500 text-right sticky left-0 bg-gray-50 z-10"
                      >
                        Total
                      </td>
                      <td className="p-3 font-medium text-right bg-gray-50">
                        {stageTotals[stageName]}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Create Deal Modal */}
      <CreateDealModal
        isOpen={isCreateDealModalOpen}
        onClose={() => setIsCreateDealModalOpen(false)}
        onSubmit={handleCreateDeal}
      />
    </div>
  );
};

export default SalesDashboard;
