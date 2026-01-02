import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    // 🔐 Mock validation
    if (!email || !password) {
      setError("Please enter email and password")
      return
    }

    // ✅ Mock success
    setError("")
    navigate("/dashboard")
  }

  return (
    <div className="page" style={{ display: "flex", justifyContent: "center" }}>
      <div className="card" style={{ width: "380px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login to MyBank
        </h2>

        {error && (
          <p style={{ color: "var(--danger)", marginBottom: "12px" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "12px" }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "16px" }}
          />

          <button type="submit" style={{ width: "100%" }}>
            Login
          </button>
        </form>

        <p style={{ marginTop: "16px", textAlign: "center" }}>
          Don’t have an account?{" "}
          <span
            style={{ color: "var(--primary)", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Open Account
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
