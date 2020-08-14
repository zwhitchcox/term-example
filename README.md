# Simple Server-Shell Browser-Terminal Example

Simple example to implement a server that communicates over websockets.

The stack uses

* [node-pty](https://github.com/microsoft/node-pty)
* [xterm.js](https://xtermjs.org/)

And that's pretty much it. I wanted to keep it as barebones as possible so you can add onto it and not get distracted by non-crucial information.

### To Run
```shell
git clone https://github.com/zwhitchcox/term-example
cd term-example
npm install
node server.js
```

Then navigate to http://localhost:8080
