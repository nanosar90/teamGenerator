const generator = team => {
    const manHTML = manager =>{ 
        return `
        <div class='flex flex-col m-6 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
            <div class='flex flex-col border bg-blue-500 w-auto p-2 border-solid rounded box-shadow-md'>
                <h1 class='text-white mx-auto bg-blue-500'>` + `${manager.getName()}`+ `</h1>
                <i class="text-white mx-auto fas fa-mug-hot"></i>
            </div>
            <div class='bg-gray-100 mx-auto p-4'>
                <p class='bg-white border-solid p-2 w-64'>ID:`+`${manager.getId()}`+`</p>
                <p class='bg-white border-solid p-2'>Email:`+`${manager.getEmail()}`+` </p>
                <p class='bg-white border-solid p-2'>Office Number:`+`${manager.getNumber()}`+`</p>
            </div>
        
    
        </div>`;
        /* return manHTML; */
    };
    
    const engHTML = engineer => {
            return `
    
        <div class='flex flex-col m-6 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
            <div class='flex flex-col border bg-blue-500 w-auto p-2 border-solid rounded box-shadow-md'>
                <h1 class='text-white mx-auto bg-blue-500'>` +`${engineer.getName()}`+ `</h1>
                <i class="fas fa-glasses text-white mx-auto"></i>
            </div>
            <div class='bg-gray-100 mx-auto p-4'>
                <p class='bg-white border-solid p-2 w-64'>ID:`+`${engineer.getId()}`+`</p>
                <p class='bg-white border-solid p-2'>Email:`+`${engineer.getEmail()}`+` </p>
                <p class='bg-white border-solid p-2'>Github:`+`${engineer.addGitHub()}`+`</p>
            </div>
    
    
        </div>`;
        /* return engHTML */
    };
    
    const intHTML = intern => {
            return `
    
        <div class='flex flex-col m-6 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
            <div class='flex flex-col border bg-blue-500 w-auto p-2 border-solid rounded box-shadow-md'>
                <h1 class='text-white mx-auto bg-blue-500'> ${intern.getName()}</h1>
                <i class="fas fa-user-graduate text-white mx-auto"></i>
            </div>
            <div class='bg-gray-100 mx-auto p-4'>
                <p class='bg-white border-solid p-2 w-64'>ID:</p>
                <p class='bg-white border-solid p-2'>Email: </p>
                <p class='bg-white border-solid p-2'>School:</p>
            </div>
    
    
        </div>`;
        /* return intHTML */
        };

        const empArray = [];
        console.log('team page' + empArray);
        empArray.push(team
            .filter(employee=>employee.getRole()==='Manager')
            .map(manager=>manHTML(manager)));

        empArray.push(team
            .filter(employee=>employee.getRole()==='Engineer')
            .map(engineer=>engHTML(engineer)));

        empArray.push(team
            .filter(employee=>employee.getRole()==='Intern')
            .map(intern=>intHTML(intern)));

            console.log(empArray);
        return empArray.join('');

        
};


module.exports = team => {
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
<div class='grid grid-cols-3 gap-4'>

${generator(team)}

    </div>  
</body>
</html>
`
};