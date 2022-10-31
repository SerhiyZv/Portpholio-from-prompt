const inquirer = require('inquirer')
const fs = require('fs');
const generateHTML = ({name, location, github, linkedin}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">Hi! My Name is ${name}</h1>
  <p class="lead">I am from ${location}.</p>
  <h3>Example heading <span class="badge badge-secondary">Contact me</h3>
  <ul class="list-group">
  <li class="list-group-item">My GitHub username is ${github}</li>
  <li class="list-group-item">My GitHub username is ${linkedin}</li>
  </li>
  </ul>
</div>
</div>
</body>
</html>`

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'What is your location',
        name: 'location',
      },

    {
      type: 'input',
      message: 'What is your gitHub',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your linkedin',
      name: 'linkedin',
    },
  ])
  .then((response) => {
  console.log(response)
  let data = generateHTML(response);
      fs.writeFile('AboutMe.html', data, (err) => {
        if(err)
        console.log(err);
        else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            console.log(fs.readFileSync("AboutMe.html", "utf8"));
        }
      })

});


