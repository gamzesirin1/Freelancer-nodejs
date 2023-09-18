const Photo = require('../models/Photo');
exports.getIndexPage = (req, res) => {
  res.render('index');
};
exports.getAddPage = (req, res) => {
  res.render('add');
};
exports.getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    photo,
  });
};
