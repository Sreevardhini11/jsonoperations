#package json
#here we are creating a demo project for student demo  login page...
{
  "name": "demoproject",
  "version": "1.0.0",
  "description": "my first nodejs demo project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "sree vardhini",
  "license": "ISC"
}
#index.js
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(Now listening on port ${port}); 
    app.get('/', (req, res) => {        //get requests to the root ("/") will route here
        res.sendFile('index.html', {root: __dirname});  
});
#html code for creating a web page...
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Login Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-container {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 300px;
            padding: 20px;
            text-align: center;
        }
        .login-container h2 {
            margin-bottom: 20px;
            color: #4CAF50;
        }
        .login-container input[type="text"],
        .login-container input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .login-container button {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
        }
        .login-container button:hover {
            background-color: #45a049;
        }
        .login-container .options {
            margin-top: 10px;
        }
        .login-container .options a {
            text-decoration: none;
            color: #007BFF;
            font-size: 14px;
        }
        .login-container .options a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Student Login Form</h2>
        <form>
            <input type="text" placeholder="Enter Username" required>
            <input type="password" placeholder="Enter Password" required>
            <button type="submit">Login</button>
            <div class="options">
                <a href="#">Sign Up</a> | <a href="#">Forgot Password?</a>
            </div>
        </form>
    </div>
</body>
</html>
