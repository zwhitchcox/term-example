const WebSocket = require('ws')
const http = require('http')
const os = require('os');
const pty = require('node-pty');
const fs = require('fs')
const path = require('path')

const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

const server = http.createServer(function (req, res) {
  fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
})

const wss = new WebSocket.Server({ server })

wss.on('connection', ws => {
  const term = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env,
  })
  term.on('data', data => {
    ws.send(data)
  })
  ws.on('message', data => {
    term.write(data)
  })
})

server.listen(8080)