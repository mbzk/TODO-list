import inquirer from 'inquirer';
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: "TODO",
            message: "What do you want to add in your TODO list?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more TODO?",
            default: false
        }
    ]);
    const { TODO, addmore } = answer;
    // console.log(answer)
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly Add valid input!");
    }
}
if (todos.length > 0) {
    console.log("Your TODO List: \n");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No TODOs found");
}
