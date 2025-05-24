import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import AuthPage from './components/AuthPage'
import MainPage from './components/MainPage'
import AdminDashboard from './components/AdminDashboard'
import ProfileSetup from './components/ProfileSetup'
import { users, admins } from './utils/Local_Storage'

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (credentials) => {
    // Check admin credentials
    const adminUser = admins.find(admin => 
      admin.email === credentials.email && admin.password === credentials.password
    )
    
    if (adminUser) {
      setUser({ ...adminUser })
      return '/admin'
    }

    // Check user credentials
    const regularUser = users.find(user => 
      user.email === credentials.email && user.password === credentials.password
    )

    if (regularUser) {
      setUser({ ...regularUser })
      return regularUser.firstTime ? '/profile-setup' : '/main'
    }

    return null
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<LandingPage onGetStarted={() => "/auth"} />} 
        />
        <Route 
          path="/auth" 
          element={<AuthPage onLogin={handleLogin} />} 
        />
        <Route 
          path="/profile-setup" 
          element={
            user && user.firstTime ? (
              <ProfileSetup user={user} setUser={setUser} />
            ) : (
              <Navigate to="/auth" />
            )
          } 
        />
        <Route 
          path="/main" 
          element={
            user && !user.firstTime ? (
              <MainPage user={user} onLogout={() => setUser(null)} />
            ) : (
              <Navigate to="/auth" />
            )
          } 
        />
        <Route 
          path="/admin" 
          element={
            user?.role === 'admin' ? (
              <AdminDashboard user={user} onLogout={() => setUser(null)} />
            ) : (
              <Navigate to="/auth" />
            )
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
