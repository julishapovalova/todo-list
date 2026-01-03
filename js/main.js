import { initListHandlers } from "./handlers/listHandlers.js";
import { initItemHandlers } from "./handlers/itemHandlers.js";
import { loadFromLocalStorage } from "./storage/todoStorage.js";
import { createListTemplate } from "./templates/listTemplates.js";
import { createItemTemplate } from "./templates/itemTemplates.js";

function renderSavedLists() {
  const savedLists = loadFromLocalStorage();
  if (!savedLists || savedLists.length === 0) return;

  savedLists.forEach((list) => {
    $(".todolist-add-new-list-container").before(
      createListTemplate(list.title)
    );
    const $lastList = $(".todolist-container").last();
    const $itemsContainer = $lastList.find(".todo-list-items-container");

    list.items.forEach((item) => {
      $itemsContainer.append(createItemTemplate(item.text, item.completed));
    });
  });
}

$(document).ready(function () {
  initListHandlers();
  initItemHandlers();
  renderSavedLists();
});
