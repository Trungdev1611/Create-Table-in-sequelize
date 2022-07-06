const express = require('express')
const app = express()
const User = require('./models/User')

async function test() {
    await User.sync({ force: true })

}
test()


app.listen(3001, (req, res) => {
    console.log('server dang chay tren http://localhost:3001')
})