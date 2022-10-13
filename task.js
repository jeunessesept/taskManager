

const prompt = require(`prompt-sync`)();

let tasks = ["read a book", "vacuum cleaner", "dish washing", "maybe some back-end challenges", "taking some fresh air"]

//acceuil

const menu = () => {
        console.log(`Welcome to your Task Manager, press:\n` +
       `1.to see all your task\n` +
       `2.to add a task\n` +
       `3. to delete a task\n` + 
       `4.to mark a task as done\n` +
       `5.to exit task manager`);
    }

//liste de tasks
const showtasks = () => {
    console.log(tasks);             
}

//ajouter une task
const addTask = () => {
    newTask = prompt(`what's the new task?`);
    tasks.push(newTask); 
    console.log(tasks)
}

//delete element

const delTask = () => {
    taskDel= prompt (`which task would you delete ?`);
    let i = taskDel;
    splicedTask = tasks.splice(i, 1);
    console.log("you removed : " + splicedTask)
    console.log("it remains", tasks);
}

const doneTask = () => {
    taskDone = prompt(`wich task is done ?`)
    let i = taskDone;
    tasks[i] = tasks[i] + "[X]"
    console.log(tasks)
}

const exit = () =>{
    console.log('ok, bye bye')
    return;
}

const taskManager = () => {
    menu();
    let choice = prompt("what's your choice?");
    if (choice === "1"){
        showtasks();
        return taskManager();
    } else if (choice === "2"){
        console.log(tasks)
        addTask();
        return taskManager();
    } else if (choice === "3"){
        delTask();
        return taskManager();
    } else if (choice === "4"){
        doneTask();
        return taskManager();
    } else if (choice === "5"){
        exit()
    }
}

taskManager()


