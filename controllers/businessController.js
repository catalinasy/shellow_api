const models = require("../models");
const Op = models.Sequelize.Op;
var Sequelize = require("sequelize");

const { Businesses, Tags, TagsBusinesses } = models;

const getBusinesses = async (req, res) => {
  let businessesList;
  const search = req.query.tag.split(",");
  req.query.tag
    ? (businessesList = await Promise.all(
        search.map(
          async (query) =>
            await Tags.findAll({
              where: {
                tag: {
                  [Op.like]: `%${query}%`,
                },
              },
              include: { model: Businesses, through: TagsBusinesses },
            })
        )
      ))
    : (businessesList = await Businesses.findAll({
        include: { model: Tags, through: TagBusinesses },
      }));
  businessesList = businessesList.flat(1)

  res.send(businessesList);
};

const createBusiness = async (req, res) => {
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

  const createdTags = await Promise.all(
    tags.map(async (tag) => {
      return await Tags.findOrCreate({
        where: {
          tag,
        },
      });
    })
  );

  const business = await Businesses.create({
    name,
    description,
    instagram,
    whatsapp,
    facebook,
    web,
    email,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const createdTagsIds = createdTags.map((t) => t[0].id);

  Promise.all(
    createdTagsIds.map(
      async (t) =>
        await TagsBusinesses.create({ tagId: t, businessId: business.id })
    )
  );
  res.send(business);
};

const getBusinessesById = async (req, res) => {
  const { id } = req.params;
  const business = await Businesses.findByPk(id, {
    include: models.Tags,
  });

  res.send(business);
};

const findByTag = async (req, res) => {
  console.log(req.params, "la request");
  const businessesList = await Businesses.findAll({
    include: models.Tags,
  });

  res.send(businessesList);
};

module.exports = {
  getBusinesses,
  createBusiness,
  getBusinessesById,
  findByTag,
};
