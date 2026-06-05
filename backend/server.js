const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { getProfileSuggestions } = require('./groq')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/recommend', async (req, res) => {
  const { role, experience, skills } = req.body

  if (!role || !experience) {
    return res.status(400).json({ error: 'Role and experience are required' })
  }

  try {
    const suggestions = await getProfileSuggestions(role, experience, skills)
    res.json({ success: true, data: suggestions })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'AI generation failed. Try again.' })
  }
})

app.get('/health', (req, res) => res.json({ status: 'running' }))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))