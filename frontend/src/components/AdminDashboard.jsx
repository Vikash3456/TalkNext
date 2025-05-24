import { users } from '../utils/Local_Storage'

export default function AdminDashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <span className="text-gray-300">{user.email}</span>
          </div>
          <button
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="container mx-auto p-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">User Management</h2>
          <div className="grid gap-4">
            {users.map(user => (
              <div key={user.email} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-white">{user.email}</p>
                  <p className="text-gray-400">Status: {user.firstTime ? 'New User' : 'Active'}</p>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Block
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
