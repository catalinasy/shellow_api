const models = require('../models');
const Op = models.Sequelize.Op;
var Sequelize = require('sequelize');

const {Businesses} = models;

const getBusinesses = async (req, res) => {
    const businessesList = await Businesses.findAll()
    res.send(businessesList);
}

const createBusiness = async (req, res) => {
    console.log(req.body)
    const {name, description, instagram, whatsapp, facebook, web, email} = req.body;
    const business = await Businesses.create({
        name,
        description,
        instagram,
        whatsapp,
        facebook,
        web,
        email,
        createdAt: new Date,
        updatedAt: new Date,
    })
    res.send(business)
}

module.exports = {
    getBusinesses,
    createBusiness
}
