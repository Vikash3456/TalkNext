import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from '../utils/Local_Storage'

export default function ProfileSetup({ user, setUser }) {
  const navigate = useNavigate()
  const [bio, setBio] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (user.firstTime) {
      // Only update the firstTime status and add profile info
      setUser(prev => ({
        ...prev,
        bio,
        username,
        firstTime: false  // Mark as not first time anymore
      }))
      navigate('/main')  // Redirect to main page
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Complete Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Bio: What would you be in a parallel universe?</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white h-32"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Complete Setup
          </button>
        </form>
      </div>
    </div>
  )
}
