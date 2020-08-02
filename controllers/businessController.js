const models = require("../models");
const Op = models.Sequelize.Op;
var Sequelize = require("sequelize");
const Tags = require("../models/Tags");
const TagsBusinesses = require("../models/TagsBusinesses");

const { Businesses } = models;

const getBusinesses = async (req, res) => {
  const businessesList = await Businesses.findAll({
    include: models.Tags
  });

  
  res.send(businessesList);
};

const createBusiness = async (req, res) => {
  console.log(req.body);
  const {
    name,
    description,
    instagram,
    whatsapp,
    facebook,
    web,
    email,
    tags,
  } = req.body;

  const formatTags = tags.map(t => ({tag: t}))

  console.log(formatTags)

  const business = await Businesses.create(
    {
      name,
      description,
      instagram,
      whatsapp,
      facebook,
      web,
      email,
      Tags: formatTags,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      include: models.Tags,
    }
  );
  res.send(business);
};

module.exports = {
  getBusinesses,
  createBusiness,
};
