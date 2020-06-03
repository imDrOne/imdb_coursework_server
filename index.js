const express = require('express')
const cors = require('cors')
const db = require('./utils/db.config')
const rootRoutes = require('./routes/root.route')

const app = express()

app.use(cors()) // use for working for localhost
app.use('/api/films', rootRoutes)


const PORT = process.env.PORT || 4000;

async function connect() {
    try {
        await db
            .authenticate()
            .then(() => console.log('Successful connection...'))
    } catch (e) {
        console.error(e)
    }
}

connect()
    .then(() => db.sync())
    .then(() => app.listen(PORT, () => {
        console.log(`Server has been started at port: ${PORT}`)
    }))
