const express = require ('express')
const socket = require ('socket.io')
let app = express()
let server = app.listen(4000, () => {
    console.log('Listening to Port 4000') 
})

app.use(express.static('public'))

let upgradedServer = socket(server)

upgradedServer.on('connection',(socket) => {

    socket.on('sendingMessage', (data) => {

        console.log('received at server', data)

        upgradedServer.emit('broadcastMessage',data)
    })


    console.log('Websocket connected', socket.id)
})