'use strict'
var Projects = require('./model')

function listAll (req, res) {
  return Projects.find()
}

function getProjectById (id) {
  return Projects.find({ id: id }).then((projectArr) => projectArr[0])
}

function create (category) {
  var entry = new Projects({
    customerDetails: { 'type': Object },
    name: { 'type': String },
    description: { 'type': String },
    teamsAssigned: { 'type': Array },
    techStack: { 'type': Array },
    icon: { 'type': String },
    splashScreen: { 'type': String }
  })
  return entry.save()
}

module.exports = {
  listAll: listAll,
  getProjectById: getProjectById,
  create: create
}
