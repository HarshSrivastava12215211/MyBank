import { useState } from "react"
import TransactionTable from "../components/TransactionTable"
import { transactions as allTransactions } from "../mock/transactions"

function Transaction() {
  const [filter, setFilter] = useState("All")

  const filteredTransactions = allTransactions.filter(tx => {
    if (filter === "All") return true
    return tx.type === filter
  })

  return (
    <div className="page">
      <h2>Transactions</h2>

      {/* Filters Card */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
  className={filter === "All" ? "" : "secondary"}
  onClick={() => setFilter("All")}
>
  All
</button>

<button
  className={filter === "Credit" ? "" : "secondary"}
  onClick={() => setFilter("Credit")}
>
  Credit
</button>

<button
  className={filter === "Debit" ? "" : "secondary"}
  onClick={() => setFilter("Debit")}
>
  Debit
</button>

        </div>
      </div>

      {/* Table Card */}
      <div className="card">
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </div>
  )
}

export default Transaction
