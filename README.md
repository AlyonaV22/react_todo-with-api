Project Description: react_todo-with-api

Author ----- Olena Verbanova

Project Overview
This project is a React-based Todo List application that seamlessly integrates with an API, allowing users to add, delete, edit, and toggle tasks efficiently. The app ensures smooth interactions, proper state management, and user-friendly error handling.

Features
✅ Adding and Deleting Todos
Users can effortlessly add new tasks.
Tasks can be deleted with a single click.
🔄 Toggling Task Status
Each task's completion status can be switched between "completed" and "not completed."
A loading overlay appears while waiting for the API response.
The status updates only after API confirmation.
If an error occurs, a notification alerts the user.
A "Toggle All" button allows users to update the status of all tasks at once:
The button is active only when all tasks are completed.
Clicking it updates only the necessary tasks, avoiding redundant API requests.

✏️ Editing Todo Titles
Double-clicking on a task enables editing mode.
An input field replaces the title and delete button.
Changes are saved when:
The user presses Enter.
The input field loses focus (onBlur).
Editing is canceled if:
The user presses the Esc key.
The new title is the same as the old one.
If the title is empty, the task is automatically deleted, just like using the delete button.
A loading indicator is shown while the title is updated.
In case of an API error, an error message is displayed.

Additional Enhancements
🚀 Optimized API interactions to avoid unnecessary requests.
⚡ Error handling for both updates and deletions ensures a smooth user experience.
🛠️ Well-structured, interactive, and responsive—making this a robust and user-friendly Todo app.
