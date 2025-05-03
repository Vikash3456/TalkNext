export default function MainPage({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">TalkNext</h1>
            <span className="text-gray-300">{user.username}</span>
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
          <h2 className="text-2xl font-bold text-white mb-4">Welcome Back!</h2>
          <p className="text-gray-300">
            You're now logged in and ready to start chatting.
          </p>
        </div>
      </main>
    </div>
  )
}
