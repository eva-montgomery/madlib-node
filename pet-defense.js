// Create a defense module
// Create a separate file for your petDefense() function.

// Make sure to module.exports = your function and then require() 
//it into the index.js

const petName = process.argv[2]
const vaillainName = process.argv[3]
const adjective = process.argv[4]

function petDefense(petName, vaillainName, adjective) {
    return console.log(`The ${adjective} ${petName} saved us from ${vaillainName}!`)
}

module.exports = {
    petDefense,
    petName,
    vaillainName,
    adjective 
}

// Import the third party modules into your index.js
// Add require() calls for each of the modules you installed with npm:

// cat-names or dog-names
// supervillains
// superb