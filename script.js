document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    // Function to add a new task
    const addTask = () => {
      const taskText = todoInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      // Create new list item
      const listItem = document.createElement('li');
  
      // Create span to hold task text
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
      });
  
      // Append task text and delete button to the list item
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteButton);
  
      // Append the list item to the to-do list
      todoList.appendChild(listItem);
  
      // Clear the input
      todoInput.value = '';
    };
  
    // Event listener for the add button
    addButton.addEventListener('click', addTask);
  
    // Event listener for Enter key on the input field
    todoInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  