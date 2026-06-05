import { useState } from 'react'
import axios from 'axios'

const ROLES = [
  'Software Engineer', 'Agentic AI Engineer', 'Frontend Developer',
  'Backend Developer', 'Data Scientist', 'ML Engineer',
  'Product Manager', 'UI/UX Designer', 'DevOps Engineer',
  'Cybersecurity Analyst', 'Chip Design Engineer', 'Full Stack Developer'
]

export default function Form({ onResult, onLoading }) {
  const [role, setRole] = useState('')
  const [customRole, setCustomRole] = useState('')
  const [experience, setExperience] = useState('')
  const [skills, setSkills] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const finalRole = role === 'other' ? customRole : role
    if (!finalRole || !experience) return
    onLoading(true)
    try {
      const res = await axios.post('https://smart-linkedin-optimizer-api.onrender.com/api/recommend', {
        role: finalRole, experience, skills
      })
      onResult(res.data.data, finalRole)
    } catch {
      alert('Something went wrong. Try again.')
    } finally {
      onLoading(false)
    }
  }

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Your Role</label>
        <select value={role} onChange={e => setRole(e.target.value)} className={inputClass} required>
          <option value="">Select your role...</option>
          {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
          <option value="other">Other (type below)</option>
        </select>
      </div>

      {role === 'other' && (
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Custom Role</label>
          <input value={customRole} onChange={e => setCustomRole(e.target.value)}
            placeholder="e.g. Blockchain Developer..."
            className={inputClass} />
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Experience Level</label>
        <select value={experience} onChange={e => setExperience(e.target.value)} className={inputClass} required>
          <option value="">Select level...</option>
          <option>Student / Intern</option>
          <option>Fresher (0-1 year)</option>
          <option>Junior (1-3 years)</option>
          <option>Mid-level (3-5 years)</option>
          <option>Senior (5+ years)</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Skills you know <span className="text-gray-400 normal-case">(optional)</span></label>
        <input value={skills} onChange={e => setSkills(e.target.value)}
          placeholder="e.g. Python, React, LangChain, RAG..."
          className={inputClass} />
      </div>

      <button type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
        Generate My LinkedIn Profile ✨
      </button>
    </form>
  )
}