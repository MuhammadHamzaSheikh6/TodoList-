#! /usr/bin/env node
//ARRAYS AND ARRAYS TYPES PRACTICE 
//working with arrays
let bikePart = ['meter', 'handle', 'sets', 'hard light'];
console.log(bikePart);
console.log("Answer only Arrays");
//push array
bikePart.push('horn');
console.log(bikePart);
console.log("Answer only Push Array");
//pop array
bikePart.pop();
console.log(bikePart);
console.log("Answer only Pop Array");
//concat array
bikePart = bikePart.concat(['wheels', 'jump']);
console.log(bikePart);
console.log("Answer only concat Array");
//  LOOP PRACTICE
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
// TODOLIST PROJECT
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    const addtask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'What you want to add in your todos?'
        },
        {
            name: 'addmore',
            type: 'confirm',
            message: 'Do you want to add more?',
            default: 'false'
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
}
console.log(todos);
