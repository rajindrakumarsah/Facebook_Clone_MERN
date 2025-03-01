--------------------------< project Info >-------------------------------------------

step 1: mkdir server -> cd server 
step 2 : npm 0 -g nodemon
step 3 : npm i express(handling http req,res) body-parser(process the req) bcrypt(to encrypt password ) cors(cross origin request) dotenv(environment variable) gridfs-stream(file upload) multer-gridfs-storage(upload file locally) helmet(req safety) morgan(login) jsonwebtoken(for authenticcation) mongoose(mongodb acess)

step 4 : npm init -y (step package json directly)
step 5 : "type": "module" ( in package.json to use import beside require) 
step 6 : add index.js (where we can create api)
            - import all the installed packages 
            -setup file location code when we upload any file
            - setup for mongodb
            - code for authentication
step 7 : create - controllers /auth.js
step 8 : creatte models / User.js (schema)
