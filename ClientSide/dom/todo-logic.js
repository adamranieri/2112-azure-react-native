const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
    const tasks = []


    /** @param event {Event} */
    function addTask(event){
        const task = taskInput.value;
        tasks.push(task);
        
        // let taskItems = ``;
        // for( const t of tasks){
        //     taskItems = taskItems + `<li>${t}</li>`
        // }

        const taskItems = tasks.map(t => `<li>${t} <button onclick="removeTask('${t}')">Complete</button></li>`).join('')

        taskList.innerHTML = taskItems;
        taskInput.value = "";
    }

    function removeTask(task = ''){
        tasks.splice(tasks.indexOf(task),1);
        const taskItems = tasks.map(t => `<li>${t} <button onclick="removeTask('${t}')">Complete</button></li>`).join('')
        taskList.innerHTML = taskItems;
    }
