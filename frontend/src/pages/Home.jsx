import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero Section */}
      <div style={{ background: "#eef2ff", padding: "80px 0" }}>
        <div className="page" style={{ textAlign: "center" }}>
          <h1>MyBank</h1>
          <p>Secure. Simple. Smart Banking.</p>

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              gap: "16px",
              justifyContent: "center"
            }}
          >
            <button onClick={() => navigate("/login")}>Login</button>

            <button
              className="secondary"
              onClick={() => navigate("/register")}
            >
              Open Account
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="page">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginTop: "60px"
          }}
        >
          <div className="card">
            <h3>Secure Accounts</h3>
            <p>Industry-grade security for all your banking needs.</p>
          </div>

          <div className="card">
            <h3>Easy Transfers</h3>
            <p>Send money instantly with full transaction tracking.</p>
          </div>

          <div className="card">
            <h3>Loans & Cards</h3>
            <p>Transparent loans, EMI calculators, and card controls.</p>
          </div>
        </div>

        <footer
          style={{
            marginTop: "60px",
            textAlign: "center",
            color: "#6b7280"
          }}
        >
          © 2026 MyBank. All rights reserved.
        </footer>
      </div>
    </>
  )
}

export default Home
