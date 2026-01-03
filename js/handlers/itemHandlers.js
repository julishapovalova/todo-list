import {
  createItemTemplate,
  editItemTemplate,
  itemContentTemplate,
} from "../templates/itemTemplates.js";
import { saveToLocalStorage } from "../storage/todoStorage.js";

export function initItemHandlers() {
  const $container = $("#todolist-main-container");

  // Add new item
  $container.on("click", ".todo-add-new-item-button", function () {
    const $listContainer = $(this).closest(".todolist-container");
    const newItem = $listContainer.find(".todo-add-new-item-input").val();
    if (newItem.trim() === "") return;
    $listContainer.find(".todo-list-items-container").append(createItemTemplate(newItem));
    $listContainer.find(".todo-add-new-item-input").val("");
    saveToLocalStorage();
  });

  // Edit item - show input field when clicking Edit button
  $container.on("click", ".todo-list-item-edit-button", function () {
    const $item = $(this).closest(".todo-list-item");
    const currentText = $item.find(".todo-list-item-text").text();
    const isChecked = $item.find(".todo-list-item-checkbox").is(":checked");
    $item.html(editItemTemplate(currentText, isChecked));
  });

  // Save edited item - update text and restore Edit/Delete buttons
  $container.on("click", ".todo-edit-item-save-button", function () {
    const $item = $(this).closest(".todo-list-item");
    const newText = $item.find(".todo-edit-item-input").val();
    if (newText.trim() === "") return;
    const isChecked = $item.find(".todo-list-item-checkbox").is(":checked");
    $item.html(itemContentTemplate(newText, isChecked));
    saveToLocalStorage();
  });

  // Delete item
  $container.on("click", ".todo-list-item-delete-button", function () {
    $(this).closest(".todo-list-item").remove();
    saveToLocalStorage();
  });

  // Save checkbox state change
  $container.on("change", ".todo-list-item-checkbox", function () {
    saveToLocalStorage();
  });
}

