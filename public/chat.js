let socket = io.connect()

let message = document.getElementById('message')
let button = document.getElementById('send')
let username = document.getElementById('username')
let output = document.getElementById('output')

button.addEventListener('click', () => {
    console.log('sent')
    socket.emit('sendingMessage', {
        'message': message.value,
        'username': username.value
    })
})

socket.on('broadcastMessage', (data) => {
    console.log('received data back at client', data)
    output.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message +'</p>'

})