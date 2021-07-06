# JavaScript Async Workshop

Create a command line application that takes a pokemon type and writes the names and moves matching that type to a file called `output.txt`, and writes "No matching type" if the api does not find a matching type.

- Must use writeFile (async version)
- Must use promise.all
- API: https://pokeapi.co/

## Running the application

To set up this application, you will need to run the command `npm install` to install the `node-fetch` package. This package allows you to use the Fetch API from node processes without requiring a browser.

To run this application you will then need to enter the command `node app.js ${[String of pokemon type]}` in your terminal (i.e. `node app.js "electric"`). The `app.js` file `console.log()`'s `process.argv[2]`. `process.argv` is an array that contains the arguments passed in to a node command, the 2 index in that array is the first argument you pass to the node command.
