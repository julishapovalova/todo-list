export const createItemTemplate = (text, isChecked = false) => `
  <li class="todo-list-item list-group-item">
    <input class="todo-list-item-checkbox" type="checkbox" ${
      isChecked ? "checked" : ""
    } />
    <span class="todo-list-item-text">${text}</span>
    <button class="todo-list-item-edit-button btn" type="button">
      <i class="bi bi-pencil"></i>
    </button>
    <button class="todo-list-item-delete-button btn" type="button">
      <i class="bi bi-trash"></i>
    </button>
  </li>
`;

export const editItemTemplate = (currentText, isChecked) => `
  <input class="todo-list-item-checkbox" type="checkbox" ${
    isChecked ? "checked" : ""
  } />
  <input class="todo-edit-item-input form-control" type="text" value="${currentText}" />
  <button class="todo-edit-item-save-button btn" type="button">
    <i class="bi bi-check-lg me-1"></i>Save
  </button>
`;

export const itemContentTemplate = (text, isChecked) => `
  <input class="todo-list-item-checkbox" type="checkbox" ${
    isChecked ? "checked" : ""
  } />
  <span class="todo-list-item-text">${text}</span>
  <button class="todo-list-item-edit-button btn" type="button">
    <i class="bi bi-pencil"></i>
  </button>
  <button class="todo-list-item-delete-button btn" type="button">
    <i class="bi bi-trash"></i>
  </button>
`;
