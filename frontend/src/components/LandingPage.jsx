import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()
  const scrollToFeatures = () => {
    document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <nav className="p-4 fixed w-full bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">TalkNext</h1>
          <button
            onClick={() => navigate('/auth')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
          >
            Sign In
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4">
        <div className="pt-32 pb-16">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Your Voice, Your Space
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect anonymously with verified students from your college. Share thoughts,
              make meaningful connections, and never feel alone again.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => navigate('/auth')}
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full"
              >
                Get Started
              </button>
              <button
                onClick={scrollToFeatures}
                className="bg-gray-700 hover:bg-gray-600 text-white text-lg px-8 py-3 rounded-full"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div id="features" className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Anonymous Connection"
            description="Break the silence with honest conversations while staying completely anonymous"
            icon="🎭"
          />
          <FeatureCard 
            title="College Verified"
            description="Exclusive access with ERP-based college email verification"
            icon="🎓"
          />
          <FeatureCard 
            title="Smart Shuffle"
            description="One tap to switch conversations that don't vibe with you"
            icon="🔄"
          />
          <FeatureCard 
            title="Privacy First"
            description="Encrypted calls, no recordings, complete data protection"
            icon="🔐"
          />
          <FeatureCard 
            title="Calm Experience"
            description="Smooth UI with soft gradients designed for comfortable conversations"
            icon="🧘"
          />
          <FeatureCard 
            title="Safe Space"
            description="Active admin oversight to maintain a healthy environment"
            icon="🛡️"
          />
        </div>

        <div id="about" className="py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Mission</h2>
            
            <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur mb-12">
              <p className="text-gray-300 leading-relaxed text-lg">
                At TalkNext, we bridge the emotional gap between students by providing a private,
                real-time voice interaction space — exclusively within your college community.
                We believe that no student should feel alone, and every voice deserves to be heard.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Personalized Experience</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">→</span>
                    Track your engagement time
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">→</span>
                    Personalize your profile with fun prompts
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">→</span>
                    Smart matching based on activity
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Community Features</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">→</span>
                    Verified college community
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">→</span>
                    Active moderation system
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">→</span>
                    Safe and secure environment
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <StatCard 
                number="75%"
                text="Students feel more confident after using TalkNext"
              />
              <StatCard 
                number="15K+"
                text="Meaningful conversations happen daily"
              />
              <StatCard 
                number="90%"
                text="Users report improved communication skills"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function StatCard({ number, text }) {
  return (
    <div className="text-center p-6 bg-gray-800/30 rounded-lg backdrop-blur">
      <div className="text-3xl font-bold text-blue-400 mb-2">{number}</div>
      <p className="text-gray-300">{text}</p>
    </div>
  )
}
