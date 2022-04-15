app.get('/',(req, res) =>{
    res.sendFile(_dirname + '/public/chat.html');
});

io.on('connection',(socket)=>{
    socket.on('chat', (msg)=>{
        io.emit('chat',msg);
        console.log('Mensaje:'+ msg);
    })
});
app.use(express.static('public'));

server.listen(3000,()=>{
    console.log('Servidor corriendo en http://localhost:3000');
})