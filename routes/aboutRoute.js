const { Router } = require('express')
const router = Router()
const User = require('../models/user')

router.post('/', async (req, res) => {
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
})

module.exports = router