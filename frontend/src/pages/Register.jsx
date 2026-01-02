import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  function handleRegister(e) {
    e.preventDefault()

    // 🧪 Mock validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      setError("All fields are required")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // ✅ Mock success
    setError("")
    navigate("/login")
  }

  return (
    <div className="page" style={{ display: "flex", justifyContent: "center" }}>
      <div className="card" style={{ width: "420px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Open a MyBank Account
        </h2>

        {error && (
          <p style={{ color: "var(--danger)", marginBottom: "12px" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: "12px" }}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "12px" }}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ marginBottom: "12px" }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "12px" }}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ marginBottom: "16px" }}
          />

          <button type="submit" style={{ width: "100%" }}>
            Create Account
          </button>
        </form>

        <p
          style={{
            marginTop: "16px",
            fontSize: "13px",
            color: "var(--text-light)"
          }}
        >
          Note: KYC verification will be required after account creation.
        </p>

        <p style={{ marginTop: "16px", textAlign: "center" }}>
          Already have an account?{" "}
          <span
            style={{ color: "var(--primary)", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register
