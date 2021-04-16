# api-graphQL

This project was generated with [nodejs] [graphql] [express] [mogodb] [babel]

# Packages & Configuration 
   1. Folder api-graphql in VSCode & Create new package.json npm init -y
   2. npm i express
        create folder and file in src/app.js
   3. for use the last version of Js
      npm install --save-dev @babel/core @babel/cli @babel/preset-env
      npm install --save-dev @babel/node
      create a file .babelrc
```
      "presets":[
      [
        "@babel/preset-env", {
          "targets": {
            "node": "current"
          }
        }
      ]
    ]
```
   4. npm i nodemon any change restart the server.
   5. Clean dist with rimraf use npm clean
   6. npm install dotnev for enviroment variables.
      Add file .env
```
            PORT=3000
            MONGO_URI="<ENTER_MONGO_URI>"
            GRAPHQL_VALUE=true
```
   7. npm install graphql-tools express-graphql graphql
   8. npm install mongoose

### CORS

 - remember to set CORS policy to server

## Development server
Run `npm run start-dev` for a dev server with nodemon. Navigate to `http://localhost:3000/graphql`. The app will automatically reload if you change any of the source files.

Run `npm run serve` for a dev server local `dist/index.js`. Navigate to `http://localhost:3000/graphql`.


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

It should be stored in dist! Once the cloudfront_react_app gets cloned to make an angular version, this should be reverted back to building into the `build/` directory!

## Deploy 
This Api is deployed in Heroku https://api-graphql-basic.herokuapp.com/graphql

```
Query
{
  hello
  greet(name:"Jose")
  tasks{
    _id
    title
    number
  }
  getUsers{
    _id
    firstname
    lastname
  }
}
```
For Add register in MongoDB
```
mutation{
  createUser(input:{ 
    firstname: "Name"
    lastname:"last"
    age: 20
  }){
    _id
    firstname
  }
}
```
it also has the methods to Update or Delete the record.
