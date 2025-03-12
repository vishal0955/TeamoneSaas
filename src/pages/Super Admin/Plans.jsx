import React from 'react';

// Demo packages array
const packages = [
  {
    name: "Basic Plan",
    price: "$19.99",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Pro Plan",
    price: "$49.99",
    features: ["Feature A", "Feature B", "Feature C", "Feature D"],
  },
  {
    name: "Enterprise Plan",
    price: "$99.99",
    features: ["Unlimited Feature 1", "Priority Support", "Advanced Tools"],
  },
];

function Plans() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Choose Your Plan</h1>
        <p className="text-muted">
          Select the best plan that suits your business needs.
        </p>
      </div>
      <div className="row justify-content-center">
        {packages.map((pkg, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card shadow-lg border-0 rounded-lg text-center p-4">
              <div
                className="card-header text-white py-3"
                style={{ backgroundColor: "#00879E" }}
              >
                <h3 className="card-title m-0">{pkg.name}</h3>
              </div>
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: "#00879E" }}>
                  {pkg.price}
                </h4>
                <ul className="list-group list-group-flush text-left my-3">
                  {pkg.features.map((feature, i) => (
                    <li className="list-group-item border-0" key={i}>
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer bg-white border-0">
                <button
                  className="btn w-100 py-2 text-white"
                  style={{ backgroundColor: "#00879E" }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
