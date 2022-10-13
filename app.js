//Arguments passed in to a node command are part of the process.argv array
//The 0 index in the array is where your Node installation is stored
//The 1 index in the array is where the file you ran Node on is stored
//The 2 index in the array is the first argument you pass to the Node command after the file name
//See documentation here - https://nodejs.org/docs/latest/api/process.html#process_process_argv
const fetch = require('node-fetch');
console.log(process.argv[2])

let pokemonDetails = {};

fetch(`https://pokeapi.co/api/v2/type/${process.argv[2]}/`)
  .then (data => {
    console.log(data)
    return data.json()
  })
   .then (data => {
    Promise.all(data.pokemon.map(pokemonObj => { 
    return fetch (pokemonObj.pokemon.url)
    .then (response => {
        return response.json()
     })
    .then (data => {
    pokemonDetails[data.name] = data.moves
    })
    }))
    .then (result => {
    for (let name in pokemonDetails) {
        //create a string, save each name in the string, followed by every move for that pokemon
    }
    })
  })

//const dataType = Promise.resolve(data.pokemon)



  //let pokemonPromise = new Promise ( (resolve, reject) => {
//     resolve
//   }





//FileSystem.writeFile('output.txt', '')



 
// fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
//   .then = package => {
//      return package.json()
//    })
//   .then = data => {
//     console.log(data)
//   })




  

// FileSystem.readFile()





