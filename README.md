# To-Do App

A simple, stylish, and functional To-Do List app built with HTML, CSS, and JavaScript. This application allows users to add, edit, delete, and manage tasks efficiently, all within a modern user interface.

---

### Functionalities:

- **Task Creation**
    - Input field to add new tasks with a dedicated `Add Task` button.
    - Displays a timestamp for when the task was created.

- **Task Management**
    - `Edit`: Modify task descriptions inline with a seamless transition between `Edit` and `Save` states.
    - `Delete`: Remove tasks with a single click.

- **Task Completion**
    - Checkbox to mark tasks as completed with visual cues (strikethrough text and gray background).

- **Validation**
    - Alerts users to ensure no empty tasks are added.

- **Date and Time Display**
    - Shows the exact date and time each task was added.

---

### Code Highlights:

- **Vanilla JavaScript**: Implements interactivity without relying on external libraries.
- **Dynamic DOM Manipulation**: Tasks and their elements (buttons, inputs, checkboxes) are created and styled programmatically.
- **Event Handling**: Leverages event listeners to manage form submissions, task actions, and UI updates.

---

### How It Works:

1. **Add a Task**
    -  Enter a task in the input field and click `Add Task`. The task will be displayed below with the time of creation.
2. **Edit or Save**
    - Click the `Edit` button to make changes to a task. Once done, click `Save` to finalize the changes.

3. **Mark as Complete**
    - Check the box next to a task to mark it as complete. The task will be grayed out with a strikethrough text effect.

4. **Delete a Task**
    - Click the `Delete` button to remove the task from the list.

---

### Styling:

- Designed using CSS with attention to detail for colors, spacing, and hover effects.
- Header and footer styled with a maroon background and white text for a professional look.
- Task items feature hover effects and distinct styles for better usability.