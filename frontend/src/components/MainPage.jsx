import { useState } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { BsChatSquareQuote } from 'react-icons/bs'
import { RiUserVoiceLine } from 'react-icons/ri'
import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'
import VoiceCallUI from './call/VoiceCallUI'

export default function MainPage({ user, onLogout }) {
  const [isMuted, setIsMuted] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [callTime, setCallTime] = useState(0)
  const [currentPartner, setCurrentPartner] = useState(null)

  const handleShuffle = () => {
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setCurrentPartner({
        username: "Anonymous User",
        bio: "In a parallel universe, I'm a space pirate"
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <nav className="bg-gray-800/90 backdrop-blur-sm p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <RiUserVoiceLine className="w-8 h-8 mr-2 text-blue-400" />
              TalkNext
            </h1>
            <span className="text-gray-300">{user.username}</span>
          </div>
          <button
            onClick={onLogout}
            className="bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-lg flex items-center space-x-2 transition-all"
          >
            <FiLogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      <main className="container mx-auto p-6 pt-24">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-6">
              <BiUser className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Your Profile</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <BiUser className="w-24 h-24 text-blue-400" />
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="text-gray-500">Username:</span> {user.username}
                </p>
                <div className="flex items-start space-x-2">
                  <BsChatSquareQuote className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{user.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call Interface */}
          <div className="md:col-span-2">
            <VoiceCallUI
              isMuted={isMuted}
              onMute={() => setIsMuted(!isMuted)}
              onShuffle={handleShuffle}
              isSearching={isSearching}
              currentPartner={currentPartner}
              callTime={callTime}
            />
          </div>

          {/* Stats Cards */}
          <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
            <StatsCard 
              icon={<AiOutlineClockCircle className="w-8 h-8" />}
              value="0"
              label="Minutes Talked"
            />
            <StatsCard 
              icon={<BiUser className="w-8 h-8" />}
              value="0"
              label="People Met"
            />
            <StatsCard 
              icon={<AiFillStar className="w-8 h-8" />}
              value="0"
              label="Rating"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

function StatsCard({ icon, value, label }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl text-center">
      <div className="text-blue-400 flex justify-center mb-2">{icon}</div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}
