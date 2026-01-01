const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(process.cwd(), 'src', 'data', 'messages.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Rewrite rules for Vercel if needed, but if rewrite sends /messages to /api/server, 
// req.url might be /messages or /api/server/messages depending on Vercel details.
// Usually Vercel strips the destination prefix if it's a file match? No.
// Let's add a rewriter just in case the path comes in weirdly.
// But standard usage: router handles /messages.
server.use(router)

module.exports = server
