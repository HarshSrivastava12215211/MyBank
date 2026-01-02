import { Link } from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">MyBank</div>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/transaction">Transactions</Link>
        <Link to="/loancards">Loans & Cards</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  )
}

export default Navbar
