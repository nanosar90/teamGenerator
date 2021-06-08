const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./members/engineer.js');
const Manager = require('./members/manager.js');
const Intern = require('./members/intern.js');
const render = require('./template/team_page')
const path = require('path');
const teamArray = [];

const output_dir = path.resolve(__dirname, 'generatedHTML');
const outputPath = path.join(output_dir, 'team.html')
const dir = './generatedHTML';

const empQuestions =  [
        {
            type: 'list',
            message: 'What is the role of this team member?',
            name: 'role',
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
        name, email, role, id
    } = ansEmpOne;
    let employee;
        
        
        
        switch(role){
            case 'Engineer':
                ansEmpTwo = await inquirer.prompt(addEngineer);
                const {
                    github
                } = ansEmpTwo;
                employee = new Engineer(name, id, email, github)
                console.log(employee);
                break;
            case 'Manager':
                ansEmpTwo = await inquirer.prompt(addManager);
                const {
                    number
                } = ansEmpTwo;
                employee = new Manager(name, id, email, number)
                console.log(employee);
                break;
            case 'Intern':
                ansEmpTwo = await inquirer.prompt(addIntern);
                const {
                    school
                } = ansEmpTwo;
                employee = new Intern(name, id, email, school)
                console.log(employee);
                break;     
            default:
                 throw new Error('invalid role.');          
            
        }
        
        teamArray.push(employee);
        console.log(teamArray);
        loopQuestions = ansEmpTwo.done
        
        
    
} while (loopQuestions === 'Yes');
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    };
    fs.writeFileSync(outputPath, render(teamArray), 'utf-8')
};


  
promptUser();