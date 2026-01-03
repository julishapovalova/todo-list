export const newListFormTemplate = () => `
  <div class="todo-create-title-container d-flex gap-2 align-items-end mb-3">
    <div class="form-floating flex-grow-1">
      <input class="todo-title-input form-control" type="text" placeholder="Todo List Title" id="todo-title-input" />
      <label for="todo-title-input">Enter your list title</label>
    </div>
    <button class="todo-title-save-button btn" type="button" id="saveTitle">
      <i class="bi bi-check-lg me-1"></i>Create
    </button>
  </div>
`;

export const createListTemplate = (title) => `
  <div class="todolist-container" id="todolist-container">
    <div class="todo-list-title-container">
      <h2>${title}</h2>
      <button class="todo-list-edit-button btn" type="button">
        <i class="bi bi-pencil me-1"></i>Edit
      </button>
      <button class="todo-list-delete-button btn" type="button">
        <i class="bi bi-trash me-1"></i>Delete
      </button>
    </div>
    <div class="todo-add-new-item-container d-flex gap-2 align-items-end mb-3">
      <div class="form-floating flex-grow-1">
        <input class="todo-add-new-item-input form-control" type="text" placeholder="What needs to be done?" />
        <label>What needs to be done?</label>
      </div>
      <button class="todo-add-new-item-button btn" type="button">
        <i class="bi bi-plus-lg me-1"></i>Add
      </button>
    </div>
    <ul class="todo-list-items-container list-group"></ul>
  </div>
`;

export const editTitleTemplate = (currentTitle) => `
  <div class="input-group">
    <input class="todo-edit-title-input form-control" type="text" value="${currentTitle}" />
    <button class="todo-edit-title-save-button btn" type="button">
      <i class="bi bi-check-lg me-1"></i>Update
    </button>
  </div>
`;

export const titleTemplate = (title) => `
  <h2>${title}</h2>
  <button class="todo-list-edit-button btn" type="button">
    <i class="bi bi-pencil me-1"></i>Edit
  </button>
  <button class="todo-list-delete-button btn" type="button">
    <i class="bi bi-trash me-1"></i>Delete
  </button>
`;
