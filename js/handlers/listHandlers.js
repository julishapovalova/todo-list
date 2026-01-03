import {
  newListFormTemplate,
  createListTemplate,
  editTitleTemplate,
  titleTemplate,
} from "../templates/listTemplates.js";
import { saveToLocalStorage } from "../storage/todoStorage.js";

export function initListHandlers() {
  const $container = $("#todolist-main-container");

  // Add new list button
  $("#add-new-list-button").on("click", () => {
    if ($("#todo-title-input").length) return;
    $(".todolist-add-new-list-container").before(newListFormTemplate());
  });

  // Save new list title
  $container.on("click", "#saveTitle", function () {
    const newTitle = $("#todo-title-input").val();
    if (newTitle.trim() === "") return;
    $(this).closest(".todo-create-title-container").remove();
    $(".todolist-add-new-list-container").before(createListTemplate(newTitle));
    saveToLocalStorage();
  });

  // Edit list title - show input field when clicking Edit button
  $container.on("click", ".todo-list-edit-button", function () {
    const $titleContainer = $(this).closest(".todo-list-title-container");
    const currentTitle = $titleContainer.find("h2").text();
    $titleContainer.html(editTitleTemplate(currentTitle));
  });

  // Save edited list title - update h2 and restore Edit/Delete buttons
  $container.on("click", ".todo-edit-title-save-button", function () {
    const $titleContainer = $(this).closest(".todo-list-title-container");
    const newTitle = $titleContainer.find(".todo-edit-title-input").val();
    if (newTitle.trim() === "") return;
    $titleContainer.html(titleTemplate(newTitle));
    saveToLocalStorage();
  });

  // Delete list
  $container.on("click", ".todo-list-delete-button", function () {
    $(this).closest(".todolist-container").remove();
    saveToLocalStorage();
  });
}

