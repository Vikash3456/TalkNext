import { BsMicFill, BsMicMuteFill } from 'react-icons/bs';
import { FaRandom } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';

export default function VoiceCallUI({ isMuted, onMute, onShuffle, isSearching, currentPartner, callTime }) {
  return (
    <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-xl">
      <div className="flex flex-col items-center space-y-6">
        {currentPartner ? (
          <>
            <BiUser className="w-24 h-24 text-blue-400" />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
                {currentPartner.username}
              </h3>
              <p className="text-gray-400 mt-2">{currentPartner.bio}</p>
            </div>
            <div className="flex items-center text-blue-400">
              <AiOutlineClockCircle className="w-5 h-5 mr-2" />
              <span className="text-lg">
                {Math.floor(callTime / 60)}:{(callTime % 60).toString().padStart(2, '0')}
              </span>
            </div>
          </>
        ) : (
          <div className="text-center space-y-4">
            <div className="animate-pulse">
              <BiUser className="w-24 h-24 text-gray-600" />
            </div>
            <h3 className="text-xl text-white">
              {isSearching ? "Finding someone..." : "Start a conversation"}
            </h3>
          </div>
        )}

        <div className="flex space-x-6">
          <button
            onClick={onMute}
            className={`p-4 rounded-full transition-all ${
              isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isMuted ? (
              <BsMicMuteFill className="w-6 h-6 text-white" />
            ) : (
              <BsMicFill className="w-6 h-6 text-white" />
            )}
          </button>
          
          <button
            onClick={onShuffle}
            disabled={isSearching}
            className="bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 rounded-full flex items-center space-x-2 transition-all"
          >
            <FaRandom className="w-5 h-5" />
            <span>{isSearching ? 'Searching...' : 'Shuffle'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
