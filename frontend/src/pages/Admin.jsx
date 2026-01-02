import { useState } from "react"
import { users as initialUsers } from "../mock/users"
import { currentUser } from "../mock/auth"

function Admin() {
  
  if (currentUser.role !== "admin") {
    return (
      <div className="page">
        <div className="card">
          <h3>Access Denied</h3>
          <p>You do not have permission to view this page.</p>
        </div>
      </div>
    )
  }

  const [users, setUsers] = useState(initialUsers)

  function toggleAccountStatus(id) {
    const updatedUsers = users.map(user =>
      user.id === id
        ? {
            ...user,
            accountStatus:
              user.accountStatus === "Active" ? "Frozen" : "Active"
          }
        : user
    )

    setUsers(updatedUsers)
  }

  return (
    <div className="page">
      <h2>Admin Panel</h2>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td
                  className={
                    user.accountStatus === "Active"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {user.accountStatus}
                </td>
                <td>
                  <button onClick={() => toggleAccountStatus(user.id)}>
                    {user.accountStatus === "Active"
                      ? "Freeze"
                      : "Unfreeze"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin
