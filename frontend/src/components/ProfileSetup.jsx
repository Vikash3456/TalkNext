import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function ProfileSetup({ user, setUser }) {
  const navigate = useNavigate()
  const [bio, setBio] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // If user already has a username and bio, redirect to main
    if (user && user.username && user.bio) {
      navigate('/main')
    }
  }, [user, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await setDoc(doc(db, 'users', user.uid), {
        bio,
        username,
        email: user.email,
      })
      setUser(prev => ({
        ...prev,
        bio,
        username,
      }))
      navigate('/main')
    } catch (err) {
      setError('Failed to save profile. Please try again.')
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
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </div>
    </div>
  )
}
