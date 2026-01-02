import { useState } from "react"

function LoanCards() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [years, setYears] = useState("")
  const [emi, setEmi] = useState(null)
  const [loanType, setLoanType] = useState("Home")

  const [cardActive, setCardActive] = useState(true)
  const [dailyLimit, setDailyLimit] = useState(50000)
  const [internationalEnabled, setInternationalEnabled] = useState(false)

  function handleLoanTypeChange(type) {
    setLoanType(type)
    if (type === "Home") setRate(8)
    if (type === "Personal") setRate(12)
    if (type === "Education") setRate(6)
    if (type === "Vehicle") setRate(9)
  }

  function calculateEMI() {
    const P = Number(principal)
    const annualRate = Number(rate)
    const tenureMonths = Number(years) * 12
    const r = annualRate / 12 / 100

    if (!P || !annualRate || !tenureMonths) {
      setEmi(null)
      return
    }

    const emiValue =
      (P * r * Math.pow(1 + r, tenureMonths)) /
      (Math.pow(1 + r, tenureMonths) - 1)

    const monthly = emiValue.toFixed(2)
    const totalPayment = (monthly * tenureMonths).toFixed(2)
    const totalInterest = (totalPayment - P).toFixed(2)

    setEmi({ monthly, totalPayment, totalInterest })
  }

  return (
    <div className="page">
      <h2>Loans & Cards</h2>

      {/* EMI Calculator */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <h3>Loan EMI Calculator</h3>

        <select value={loanType} onChange={(e) => handleLoanTypeChange(e.target.value)}>
          <option value="Home">Home Loan</option>
          <option value="Personal">Personal Loan</option>
          <option value="Education">Education Loan</option>
          <option value="Vehicle">Vehicle Loan</option>
        </select>

        <input
          type="number"
          placeholder="Loan Amount (₹)"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />

        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <input
          type="number"
          placeholder="Tenure (Years)"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />

        <button onClick={calculateEMI}>Calculate EMI</button>

        {emi && (
          <div style={{ marginTop: "16px" }}>
            <p><strong>Monthly EMI:</strong> ₹ {emi.monthly}</p>
            <p>Total Interest: ₹ {emi.totalInterest}</p>
            <p>Total Payable: ₹ {emi.totalPayment}</p>
          </div>
        )}
      </div>

      {/* Card Controls */}
      <div className="card">
        <h3>Card Controls</h3>

        <p>
          Card Status:{" "}
          <strong className={cardActive ? "text-success" : "text-danger"}>
            {cardActive ? "Active" : "Blocked"}
          </strong>
        </p>

        <button onClick={() => setCardActive(!cardActive)}>
          {cardActive ? "Block Card" : "Unblock Card"}
        </button>

        <div style={{ marginTop: "16px" }}>
          <label>Daily Spending Limit (₹)</label>
          <input
            type="number"
            value={dailyLimit}
            onChange={(e) => setDailyLimit(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "12px" }}>
          <label>
            <input
              type="checkbox"
              checked={internationalEnabled}
              onChange={() => setInternationalEnabled(!internationalEnabled)}
            />
            Enable International Usage
          </label>
        </div>
      </div>
    </div>
  )
}

export default LoanCards
