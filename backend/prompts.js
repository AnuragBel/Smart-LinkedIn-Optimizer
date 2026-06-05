const buildPrompt = (role, experience, skills) => {
  return `You are a LinkedIn profile expert. A new user wants to build a professional LinkedIn profile.

User details:
- Role: ${role}
- Experience level: ${experience}
- Skills they know: ${skills}

Generate the following in JSON format only (no extra text, no markdown, no code blocks):
{
  "headline": "professional LinkedIn headline (max 200 chars)",
  "about": "professional about section (3-4 short paragraphs, first person)",
  "career_objective": "2-3 sentence career objective tailored to the role and experience level",
  "skills": ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7", "skill8", "skill9", "skill10"],
  "experience_description": ["bullet point 1", "bullet point 2", "bullet point 3", "bullet point 4", "bullet point 5"],
  "industry_knowledge": ["industry1", "industry2", "industry3", "industry4", "industry5"],
  "soft_skills": ["Communication", "Teamwork", "Problem Solving", "Adaptability", "Critical Thinking"],
  "certifications": ["certification 1 with provider", "certification 2 with provider", "certification 3 with provider", "certification 4 with provider"],
  "achievements": ["achievement 1 example", "achievement 2 example", "achievement 3 example"],
  "custom_url": "suggested LinkedIn URL slug e.g. john-doe-ai-engineer",
  "connection_message": "a short friendly LinkedIn connection request message (max 300 chars)",
  "top_companies": ["company1", "company2", "company3", "company4", "company5"],
  "job_titles": ["job title 1", "job title 2", "job title 3", "job title 4", "job title 5"]
}

Important rules:
- Tailor everything specifically for the ${role} role and ${experience} level
- Make it realistic, professional and ATS friendly
- Return only valid JSON, no extra text outside the JSON`
}

module.exports = { buildPrompt }