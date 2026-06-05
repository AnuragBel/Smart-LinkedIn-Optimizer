import { useState } from 'react'
import Form from './Form'
import Results from './Results'

export default function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">in</span>
          </div>
          <div>
            <h1 className="text-base font-semibold text-gray-900">LinkedIn Profile AI</h1>
            <p className="text-xs text-gray-400">Smart profile suggestions powered by AI</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs px-4 py-1.5 rounded-full mb-4">
            ✨ AI Powered · Free · Instant
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Build a Professional LinkedIn Profile</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">Enter your role and let AI generate your headline, about section, skills and more — tailored just for you.</p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 mb-8">
          <h3 className="text-sm font-semibold text-gray-700 mb-6 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center">1</span>
            Tell us about yourself
          </h3>
          <Form onResult={(data, r) => { setResult(data); setRole(r) }} onLoading={setLoading} />
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm">Generating your profile suggestions...</p>
            <p className="text-gray-400 text-xs mt-1">This takes just a few seconds</p>
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full text-xs flex items-center justify-center">2</span>
              Your AI Generated Profile
            </h3>
            <Results data={result} role={role} />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-xs text-gray-400">
        Built with LangChain · Groq · React · Node.js
      </div>
    </div>
  )
}