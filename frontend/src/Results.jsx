export default function Results({ data, role }) {
  const copy = (text) => {
    navigator.clipboard.writeText(Array.isArray(text) ? text.join('\n') : text)
  }

  const Section = ({ title, icon, content, isList, isUrl }) => (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        </div>
        <button onClick={() => copy(content)}
          className="text-xs text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1 rounded-lg hover:bg-blue-100 transition-colors">
          Copy
        </button>
      </div>
      {isList ? (
        <div className="flex flex-wrap gap-2">
          {content.map((item, i) => (
            <span key={i} className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full border border-blue-100 font-medium">
              {item}
            </span>
          ))}
        </div>
      ) : Array.isArray(content) ? (
        <ul className="space-y-2">
          {content.map((b, i) => (
            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : isUrl ? (
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
          <span className="text-xs text-gray-400">linkedin.com/in/</span>
          <span className="text-sm font-medium text-blue-600">{content}</span>
        </div>
      ) : (
        <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{content}</p>
      )}
    </div>
  )

  return (
    <div>
      {/* Success Banner */}
      <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-lg">✅</div>
        <div>
          <p className="text-sm font-medium text-green-800">Profile generated for <strong>{role}</strong></p>
          <p className="text-xs text-green-600 mt-0.5">Click "Copy" on any section and paste directly into LinkedIn</p>
        </div>
      </div>

      {/* Profile Sections */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Profile Sections</p>
      <Section title="Headline" icon="🏷️" content={data.headline} />
      <Section title="Career Objective" icon="🎯" content={data.career_objective} />
      <Section title="About / Summary" icon="👤" content={data.about} />

      {/* Skills */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3 mt-6">Skills</p>
      <Section title="Technical Skills" icon="⚡" content={data.skills} isList />
      <Section title="Industry Knowledge" icon="🏭" content={data.industry_knowledge} isList />
      <Section title="Soft Skills" icon="🤝" content={data.soft_skills} isList />

      {/* Experience & Achievements */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3 mt-6">Experience & Achievements</p>
      <Section title="Experience Description" icon="💼" content={data.experience_description} />
      <Section title="Achievements" icon="🏆" content={data.achievements} />
      <Section title="Certifications" icon="📜" content={data.certifications} />

      {/* LinkedIn Tips */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3 mt-6">LinkedIn Tips</p>
      <Section title="Custom URL Suggestion" icon="🔗" content={data.custom_url} isUrl />
      <Section title="Connection Message Template" icon="💬" content={data.connection_message} />

      {/* Job Search */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3 mt-6">Job Search</p>
      <Section title="Top Companies to Follow" icon="🏢" content={data.top_companies} isList />
      <Section title="Job Titles to Search" icon="🔍" content={data.job_titles} isList />
    </div>
  )
}