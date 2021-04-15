# api-graphQL

This project was generated with [graphql] [express] [mogodb] [babel]

Build project. 
   1. folder api-graphql in VSCode. npm init -y
   2. npm i express
        create folder and file in src/index.js
   3. for use the last version of Js
      npm install --save-dev @babel/core @babel/cli @babel/preset-env
      npm install --save-dev @babel/node
      create a file .babelrc
   4. npm i nodemon any change restart the server.
   5. Clean dist with rimraf use npm clean
   6. npm install dotnev for enviroment variables.
      Add file .env 
            PORT=3000
            MONGO_URI="<ENTER_MONGO_URI>"
            GRAPHQL_VALUE=true




## Development server
Run `npm run start-dev` for a dev server with nodemon. Navigate to `http://localhost:3000/graphql`. The app will automatically reload if you change any of the source files.

Run `npm run serve` for a dev server local `dist/index.js`. Navigate to `http://localhost:3000/graphql`.


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

It should be stored in dist! Once the cloudfront_react_app gets cloned to make an angular version, this should be reverted back to building into the `build/` directory!


