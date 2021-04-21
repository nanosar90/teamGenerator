const fs = require('fs');
const inquirer = require('inquirer');
const addEngineer = require('./members/engineer.js');
const addManager = require('./members/manager.js');
const addIntern = require('./members/intern.js');



// TODO: Create an array of questions for user input
const promptUser = async () => {
    return await inquirer.prompt([
        {
            type: 'list',
            message: 'What is the role of this team member?',
            name: 'title',
            choices: ['Intern','Engineer', 'Manager', 'Team Done!']
        },

        
    ]).then(userSelect=>{

        switch(userSelect.title){
            case 'Engineer':
                addEngineer();
                 /* async () => {
                    addEngineer().then(answers =>{
                    
                    return answers;
                    
                }); await (start())}; */
                break;
            case 'Manager':
                addManager();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'Team Done!':
                console.log('File Written');
                break;
            
        }
    })
};





async function init () {
    const answers = await start();
    const baseHTML = `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <script defer src="https://pro.fontawesome.com/releases/v5.10.0/js/all.js" integrity="sha384-G/ZR3ntz68JZrH4pfPJyRbjW+c0+ojii5f+GYiYwldYU69A+Ejat6yIfLSxljXxD" crossorigin="anonymous"></script>


    <title>My Team</title>

</head>

<body class='bg-gray-200'>
    <h1 class='text-white bg-red-400 text-6xl text-center mx-auto p-8'>My Team</h1>
<div class='grid grid-cols-3 gap-4'>`

const manHTML = `
    <div class='flex flex-col m-6 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
        <div class='flex flex-col border bg-blue-500 w-auto p-2 border-solid rounded box-shadow-md'>
            <h1 class='text-white mx-auto bg-blue-500'>` + `${answer.role.manager}`+ `</h1>
            <i class="text-white mx-auto fas fa-mug-hot"></i>
        </div>
        <div class='bg-gray-100 mx-auto p-4'>
            <p class='bg-white border-solid p-2 w-64'>ID:</p>
            <p class='bg-white border-solid p-2'>Email: </p>
            <p class='bg-white border-solid p-2'>Office Number:</p>
        </div>


    </div>`

const engHTML = `

    <div class='flex flex-col m-6 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
        <div class='flex flex-col border bg-blue-500 w-auto p-2 border-solid rounded box-shadow-md'>
            <h1 class='text-white mx-auto bg-blue-500'>` +`${answer.role.engineer}`+ `</h1>
            <i class="fas fa-glasses text-white mx-auto"></i>
        </div>
        <div class='bg-gray-100 mx-auto p-4'>
            <p class='bg-white border-solid p-2 w-64'>ID:</p>
            <p class='bg-white border-solid p-2'>Email: </p>
            <p class='bg-white border-solid p-2'>Github:</p>
        </div>


    </div>`

const intHTML = `

    <div class='flex flex-col m-6 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
        <div class='flex flex-col border bg-blue-500 w-auto p-2 border-solid rounded box-shadow-md'>
            <h1 class='text-white mx-auto bg-blue-500'>` + `${answer.role.intern}` + `</h1>
            <i class="fas fa-user-graduate text-white mx-auto"></i>
        </div>
        <div class='bg-gray-100 mx-auto p-4'>
            <p class='bg-white border-solid p-2 w-64'>ID:</p>
            <p class='bg-white border-solid p-2'>Email: </p>
            <p class='bg-white border-solid p-2'>School:</p>
        </div>


    </div>`

const endHTML = `
    </div>  
</body>
</html>`


    fs.writeFile('./index.html', readMe, error=> {
        console.log(error)
    })
}

// Function call to initialize app


const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote your page to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();