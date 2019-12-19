// Madlib with pets and supervillains

// Write a function called petDefense()
// It should accept these arguments:

// petName
// vaillainName
// adjective
// It should return a string that substitutes the values 
// of the arguments in the form of:

// The <adjective> <petName> saved us from <villainName>!
// Manually call your function to make sure it works.

const {petName, vaillainName, adjective, petDefense} = require('./pet-defense')

// const petName = process.argv[2]
// const vaillainName = process.argv[3]
// const adjective = process.argv[4]

// function petDefense(petName, vaillainName, adjective) {
//     return console.log(`The ${adjective} ${petName} saved us from ${vaillainName}!`)
// }

petDefense(petName, vaillainName, adjective)

const catNames = require('cat-names');
const dogNames = require('dog-names');
const supervillains = require('supervillains');
const superb = require('superb');

// Get a random word/name from each module
