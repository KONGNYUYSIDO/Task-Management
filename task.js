// Task Management System

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
function taskStatus(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = 'completed';
        return tasks;
    }
}

//function to delete a task
function deleteTask(id) {
    const del = tasks.find(task => task.id === id);
    if (del) {
        tasks.splice(id);
        return tasks;
    }
}

addTask("clean the house", "mix water with detergent and mop the rooms");
addTask("visit orphanage", "buy books, pens, pencils, clothings and shoes");
viewTask();
// taskStatus(1);
const update = taskStatus(1);
console.log("Updated Tasks :", update);
const delt = deleteTask(1);
console.log("Updated Tasks :", delt);
