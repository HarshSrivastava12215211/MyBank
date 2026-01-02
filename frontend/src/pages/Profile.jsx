import { useState } from "react"

function Profile() {
  const [name, setName] = useState("Saras")
  const [email, setEmail] = useState("saras@gmail.com")
  const [phone, setPhone] = useState("8090374077")
  const [alertsEnabled, setAlertsEnabled] = useState(true)
  const kycStatus = "Verified"

  function handleSave() {
    alert("Profile updated successfully (mock)")
  }

  function handlePasswordChange() {
    alert("Password changed successfully (mock)")
  }

  return (
    <div className="page">
      <h2>Profile & Security</h2>

      <div className="card" style={{ marginBottom: "24px" }}>
        <h3>Profile Details</h3>

        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />

        <p>
          KYC Status: <strong className="text-success">{kycStatus}</strong>
        </p>

        <button onClick={handleSave}>Save Profile</button>
      </div>

      <div className="card">
        <h3>Security</h3>

        <button onClick={handlePasswordChange}>Change Password</button>

        <div style={{ marginTop: "12px" }}>
          <label>
            <input
              type="checkbox"
              checked={alertsEnabled}
              onChange={() => setAlertsEnabled(!alertsEnabled)}
            />
            Enable Transaction Alerts
          </label>
        </div>
      </div>
    </div>
  )
}

export default Profile
