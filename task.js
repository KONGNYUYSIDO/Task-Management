// Task Management System

const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];   //an empty array to store all tasks

//function to add a task
function addTask(title, description) {
    const task = {
        id: tasks.length + 1,
        title: title,
        description: description,
        status: 'pending',
        createdAt: new Date()
    };
    tasks.push(task);       //Add a task to the tasks array
    console.log('Task added');
}

//function to view all tasks
function viewTask() {
    if (tasks.length === 0) {
        console.log('Array is empty');
        return;
    }
    console.log('Tasks :', tasks);
    // console.log(tasks.length);
    
}

//function to update the status of a task
function taskStatus() {
    // Ask the user for the task ID
    rl.question('Enter the task ID: ', (id) => {
        id = parseInt(id);  // Convert input to an integer

        // Ask the user for the new status
        rl.question('Enter the new status: ', (newStatus) => {
            const task = tasks.find(task => task.id === id);
            if (task) {
                task.status = newStatus;  // Update the task status
            } else {
                console.log('Task not found');
            }

            rl.close();  // Close the readline interface after user input
        });
    });
}

//function to delete a task
function deleteTask(id) {
    const del = tasks.findIndex(task => task.id === id);  //Find the index of the task with the given id
    if (del !== -1) {   //If task is found (index !== -1), remove it from the array
        tasks.splice(del, 1);    // Remove 1 task at the found index
        return tasks;
    } else {
        console.log('Task not found');
    }
}

addTask("clean the house", "mix water with detergent and mop the rooms");
addTask("visit orphanage", "buy books, pens, pencils, clothings and shoes");

viewTask();

const update = taskStatus();
console.log("Updated Tasks :", update);

// const delt = deleteTask(2);
// console.log("Updated Tasks after deletion :", delt);
