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
step 7 : create - controllers /auth.js, users.js , 
step 8 : creatte models / User.js (for user schema), post(to write post schema )
step 9 : create middleware/ auth.js ,
step 10 : create routes / auth.js,post.js,users.js
step 11 : create data / index.js (where we can put some fake data)
to save this data into the database -> import it in main index.js
and at last -->  (we have to run the below code once only otherwise duplicate will be generate)    
/* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);


--------------------frontend-------------------
->npm i -g npx (install npx)
->npx create-react-app client
->npm i react-redux @reduxjs/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material 

react-redux - (state management tool)
@reduxjs/toolkit - (easy way to use redux)
redux-persist - (select the state using local storage) - store token info into local state
react-dropzone - (can halding file upload in frontend , so that we can get the data in backend )
dotenv - (for environment variable )
formik - for form handling 
yup - for validation
@mui/material @emotion/react @emotion/styled @mui/icons-material - to make the ui creative

--import the font from google font - Rubik , copy the import code and paste into the index.css , also add some global css
#in index.css
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

html,
body,
#root,
.app {
  height: 100%;
  width: 100%;
  font-family: "Rubik", sans-serif;
}


-> create scenes folder -> crate homepage > index.jsx , loginpage >Form.js,index.js  , navbar > index.js , Widgets > AdvertWidget.jsx,friendlistwidget.jsx,mypostwidget.jsx,postwidget.jsx,postwidget.jsx,userwideget.jsx 

-> create state folder > index.js
- it is used to make the changes funtion like dark and light mode
- go to the app.js and use that reduce function into it to manage the state

-> create theme.js file
here we can set material ui for light and darkmode 
-we have to use it in App.js file 

--> create components folder
inside it > FlexBetween.jsx -> we can use it in navbar > index.js 
