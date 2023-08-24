const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()
app.use(cors());


// Connect Database
connectDB()

// Init middlewares
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/fdas', require('./routes/api/fdas'))


app.get('/', (req, res) => res.send('Api Running'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started at ${PORT} `))


