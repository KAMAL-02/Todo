let todo = [];

let req = prompt("Enter the request")

while (true) {

    if (req == "quit") {
        console.log("Quitted");
        break;
    }
    if(req == "list"){
        console.log("___________");
        for (let i = 0; i < todo.length; i++) {
            console.log(i,todo[i]);
        }
        console.log("___________");
    }
    else if(req == "add"){
        let task = prompt("Enter the task");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the index you want to delete");
        todo.splice(idx , 1);
        console.log("task deleted");
    } 
    req = prompt("Enter the request")  
}
