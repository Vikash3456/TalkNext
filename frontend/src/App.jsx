import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import AuthPage from './components/AuthPage'
import MainPage from './components/MainPage'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              onGetStarted={() => window.location.assign('/auth')}
            />
          }
        />
        <Route
          path="/auth"
          element={
            <AuthPage
              onLogin={(userData) => {
                setUser(userData)
                window.location.assign('/main')
              }}
            />
          }
        />
        <Route
          path="/main"
          element={
            user ? (
              <MainPage user={user} onLogout={() => {
                setUser(null)
                window.location.assign('/')
              }} />
            ) : (
              // Redirect to auth if not logged in
              <AuthRedirect />
            )
          }
        />
      </Routes>
    </Router>
  )
}

// Redirect component for unauthorized access
function AuthRedirect() {
  const navigate = useNavigate()
  // Redirect to /auth on mount
  useState(() => {
    navigate('/auth', { replace: true })
  }, [navigate])
  return null
}

export default App
