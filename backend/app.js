const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})


app.post('/register', (req, res) => {
  const { name, email, password } = req.body
    console.log('User registered:')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Password:', password)


res.json({ 
    message: 'User registered successfully!' 
  })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
