const express = require('express')
const app = express()
const port = 5000
const mongodb = require("./db")


mongodb();
const cors = require("cors")
app.use(cors({
    origin:'https://health-careapp.vercel.app/'
  }));

app.use(express.json());
app.use('/api/',require("./routes/CreatePatient"));
app.use('/api/',require("./routes/Displaydata"));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
