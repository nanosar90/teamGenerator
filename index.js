const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./members/engineer.js');
const Manager = require('./members/manager.js');
const Intern = require('./members/intern.js');
const empArray = [];


const empQuestions =  [
        {
            type: 'list',
            message: 'What is the role of this team member?',
            name: 'title',
            choices: ['Intern','Engineer', 'Manager']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this team member?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
        },
        
    ];

const addManager = [
    {
        type: 'input',
        name: 'number',
        message: 'What is their phone number?',
    },
    {
        type: 'list',
        message: 'Do you have another team member to add?',
        name: 'done',
        choices: ['Yes', 'No']
    }
]

const addIntern = [
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?',
    },
    {
        type: 'list',
        message: 'Do you have another team member to add?',
        name: 'done',
        choices: ['Yes', 'No']
    }
];

const addEngineer = [
            
    {
        type: 'input',
        name: 'github',
        message: 'What is their github username?',
    },
    {
        type: 'list',
        message: 'Do you have another team member to add?',
        name: 'done',
        choices: ['Yes', 'No']
    }
];

// TODO: Create an array of questions for user input
let loopQuestions;

const promptUser = async () => {
    do {

    
    
    const ansEmpOne = await inquirer.prompt(empQuestions);
    let ansEmpTwo;
    const {
        name, email, title, id
    } = ansEmpOne;
    let employee;
        
        
        
        switch(title){
            case 'Engineer':
                ansEmpTwo = await inquirer.prompt(addEngineer);
                const {
                    github
                } = ansEmpTwo;
                const engineer = new Engineer(name, id, email, github)
                break;
            case 'Manager':
                ansEmpTwo = await inquirer.prompt(addManager);
                const {
                    number
                } = ansEmpTwo;
                const manager = new Manager(name, id, email, number)
                break;
            case 'Intern':
                ansEmpTwo = await inquirer.prompt(addIntern);
                const {
                    school
                } = ansEmpTwo;
                const intern = new Intern(name, id, email, school)
                break;     
            default:
                 init();          
            
        }
        
        empArray.push(employee);
        loopQuestions = ansEmpTwo.done
        
        
    
} while (loopQuestions === 'Yes');
    console.log('File Written');    
};



//pass empArray through 



async function init () {
    const answers = await promptUser();
    console.log(empArray)
    
    const baseHTML = () => {
        return `
    
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
    };

const mHTML = manager =>{ 
    const manHTML = `
    <div class='flex flex-col m-6 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
        <div class='flex flex-col border bg-blue-500 w-auto p-2 border-solid rounded box-shadow-md'>
            <h1 class='text-white mx-auto bg-blue-500'>` + `${manager.getName()}`+ `</h1>
            <i class="text-white mx-auto fas fa-mug-hot"></i>
        </div>
        <div class='bg-gray-100 mx-auto p-4'>
            <p class='bg-white border-solid p-2 w-64'>ID:</p>
            <p class='bg-white border-solid p-2'>Email: </p>
            <p class='bg-white border-solid p-2'>Office Number:</p>
        </div>


    </div>`
    return manHTML;
};

const engHTML = engineer => {
    return  `

    <div class='flex flex-col m-6 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
        <div class='flex flex-col border bg-blue-500 w-auto p-2 border-solid rounded box-shadow-md'>
            <h1 class='text-white mx-auto bg-blue-500'>` +`${engineer.getName()}`+ `</h1>
            <i class="fas fa-glasses text-white mx-auto"></i>
        </div>
        <div class='bg-gray-100 mx-auto p-4'>
            <p class='bg-white border-solid p-2 w-64'>ID:</p>
            <p class='bg-white border-solid p-2'>Email: </p>
            <p class='bg-white border-solid p-2'>Github:</p>
        </div>


    </div>`
};

const intHTML = intern => {
    return `

    <div class='flex flex-col m-6 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
        <div class='flex flex-col border bg-blue-500 w-auto p-2 border-solid rounded box-shadow-md'>
            <h1 class='text-white mx-auto bg-blue-500'>` + `${intern.getName()}` + `</h1>
            <i class="fas fa-user-graduate text-white mx-auto"></i>
        </div>
        <div class='bg-gray-100 mx-auto p-4'>
            <p class='bg-white border-solid p-2 w-64'>ID:</p>
            <p class='bg-white border-solid p-2'>Email: </p>
            <p class='bg-white border-solid p-2'>School:</p>
        </div>


    </div>`
    };

const endHTML = `
    </div>  
</body>
</html>`


    /* fs.writeFile('./generatedHTML/index.html',   ,  error=> {
        console.log(error)
    }) */
};

// Function call to initialize app
/* empArray.push(team
    .filter(employee=>employee.getRole()==='Manager')
    .map(manager=>manHTML(manager))) */

const writeHTML = (basehtml, manHTML, engHTML, intHTML, endHTML) => {
    init()
      .then((answers) => fs.writeFile('./generatedHTML/index.html', writeHTML(basehtml, manHTML, engHTML, intHTML, endHTML)))
      .then(() => console.log('Successfully wrote your page to index.html'))
      .catch((err) => console.error(err));
  };
  
  writeHTML();