const Groq = require('groq-sdk')
require('dotenv').config()

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

const getProfileSuggestions = async (role, experience, skills) => {
  const { buildPrompt } = require('./prompts')

  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [{ role: 'user', content: buildPrompt(role, experience, skills) }],
    temperature: 0.7,
    max_tokens: 1500,
  })

  const raw = completion.choices[0].message.content

  // Clean the response thoroughly
  const cleaned = raw
    .replace(/```json/g, '')
    .replace(/```/g, '')
    .replace(/[\x00-\x1F\x7F]/g, ' ')  // remove bad control characters
    .trim()

  return JSON.parse(cleaned)
}

module.exports = { getProfileSuggestions }