const Photo = require('../models/Photo')
exports.getIndexPage = (req, res) => {
	res.render('index')
}

exports.getAddPage = (req, res) => {
	res.render('add')
}

exports.getContactPage = (req, res) => {
	res.render('contact')
}

exports.sendEmail = (req, res) => {
	console.log(req.body)
}

exports.getEditPage = async (req, res) => {
	const photo = await Photo.findOne({ _id: req.params.id })
	res.render('edit', {
		photo
	})
}
