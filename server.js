const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const User = require('./models/user')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const MONGODB_URI = `mongodb+srv://Vlados:TftmBmQtTSiaUtoj@cluster0.k78kw.mongodb.net/testDB`

app
	.prepare()
	.then(() => {
		const server = express()

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
		server.post('/add', async (req, res) => {
			const canditate = new User({
				name: req.body.name,
				surname: req.body.surname,
				age: req.body.age
			})

			try {
				await canditate.save()
				res.redirect('/regForm')
			} catch (e) {
				console.log(e)
			}
			res.redirect('/regForm')
		})

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