window.addEventListener('load', () => {
    const form = document.querySelector("#taskForm");
    const input = document.querySelector("#taskInput");
    const listItem = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();  

        const task = input.value;      

        if (!task) {
            alert('Please enter a task!');  
            return;
        }

        const taskItem = document.createElement('div');    
        taskItem.classList.add('task');

        const taskContent = document.createElement('div');  
        taskContent.classList.add('content');               

        const taskCheckbox = document.createElement('input');   
        taskCheckbox.type = 'checkbox';
        taskCheckbox.classList.add('check');    

        taskCheckbox.addEventListener('change', (e) => {
            if (taskCheckbox.checked) {
                taskItem.classList.add('completed');   
            } else {
                taskItem.classList.remove('completed');     
            }
        });

        const taskInput = document.createElement('input');       
        taskInput.classList.add('text');
        taskInput.type = 'text';
        taskInput.value = task;
        taskInput.setAttribute('readonly', 'readonly');    

        taskContent.appendChild(taskCheckbox);      
        taskContent.appendChild(taskInput);         
        taskItem.appendChild(taskContent);          

        const taskTime = document.createElement('div');     
        taskTime.classList.add('time');
        const now = new Date();
        taskTime.innerText = `Added on: ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
        taskItem.appendChild(taskTime);    

        const taskActions = document.createElement('div');       
        taskActions.classList.add('actions');

        const taskEdit = document.createElement('button');      
        taskEdit.classList.add('edit');
        taskEdit.innerText = 'Edit';

        const taskDelete = document.createElement('button');    
        taskDelete.classList.add('delete');
        taskDelete.innerText = 'Delete';

        taskActions.appendChild(taskEdit);     
        taskActions.appendChild(taskDelete);    

        taskItem.appendChild(taskActions);   

        listItem.appendChild(taskItem);      

        input.value = '';   
        taskEdit.addEventListener('click', (e) => {
			if (taskEdit.innerText.toLowerCase() === "edit") {      
				taskEdit.innerText = "Save";        
				taskEdit.classList.remove("edit");  
				taskEdit.classList.add("save");     
				taskInput.removeAttribute("readonly");      
				taskInput.focus();     
			} else {
				taskEdit.innerText = "Edit";    
				taskEdit.classList.remove("save");      
				taskEdit.classList.add("edit");     
				taskInput.setAttribute("readonly", "readonly");     
			}
		});

        taskDelete.addEventListener('click', (e) => {
            listItem.removeChild(taskItem);     
        });
    });
});