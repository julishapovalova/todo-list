const STORAGE_KEY = "todoLists";

export function saveToLocalStorage() {
  const lists = [];

  $(".todolist-container").each(function () {
    const $list = $(this);
    const title = $list.find(".todo-list-title-container h2").text();
    const items = [];

    $list.find(".todo-list-item").each(function () {
      const $item = $(this);
      const text = $item.find(".todo-list-item-text").text();
      const completed = $item.find(".todo-list-item-checkbox").is(":checked");
      items.push({ text, completed });
    });

    lists.push({ title, items });
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
}

export function loadFromLocalStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch (e) {
    console.error("Failed to parse todo lists from localStorage:", e);
    return null;
  }
}

export function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}
