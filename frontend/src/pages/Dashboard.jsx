import AccountCard from "../components/AccountCard"
import TransactionTable from "../components/TransactionTable"
import { transactions } from "../mock/transactions"

function Dashboard() {
  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div className="card" style={{ marginBottom: "24px" }}>
        <AccountCard
          accountType="Savings"
          accountNumber="1234567890"
          balance="50000"
        />
      </div>

      <div className="card">
        <h3 style={{ marginBottom: "12px" }}>Recent Transactions</h3>
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  )
}

export default Dashboard
