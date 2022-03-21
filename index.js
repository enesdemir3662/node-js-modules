"use strict";

const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    res.writeHead(200, 'Content-type: text/html; charset=utf-8')

    switch (req.url) {
        case '/':
            res.write("welcome to homepage")
            break

        case '/about':
            fs.readFile("/pages/about.html", (err, data) => {
                if (err) {
                    res.writeHead(500, "Content-type: text/html; charset=utf-8")
                    res.write("500 internal server error")
                } else {
                    res.write(data)
                }
            })

            break

        default:
            res.writeHead(404, 'Content-type: text/html; charset=utf-8')
            res.write("404 Page is not found")
    }

    res.end()
})

server.listen(5000)


