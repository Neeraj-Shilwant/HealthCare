const express = require('express')
const app = express()
const port = 5000
const mongoconnect = require("./mongoconnect")


// Connect to MongoDB Atlas
mongoconnect();

const cors = require("cors")
app.use(cors({
    origin:'http://localhost:3000'
  }));

app.use(express.json());
app.use('/api/',require("./routes/CreatePatient"));
app.use('/api/',require("./routes/Displaydata"));
app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
