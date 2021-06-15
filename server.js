const express = require('express')
const next = require('next')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// const MONGODB_URI = your DB

app
	.prepare()
	.then(() => {
		const server = express()

		const regForm = require('./routes/aboutRoute')

		async function start() {
			await mongoose.connect(MONGODB_URI, {
				useNewUrlParser: true,
				useFindAndModify: false,
				useUnifiedTopology: true
			})
		}
		start()
		server.set('views', 'pages')
		server.use(express.urlencoded({ extended: true }))

		server.use('/add', regForm)

		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(PORT, err => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${PORT}`)
		})
	})
	.catch(ex => {
		console.error(ex.stack)
		process.exit(1)
	})