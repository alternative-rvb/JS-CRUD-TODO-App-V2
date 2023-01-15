import {TodoList} from "./components/TodoList.js";
import {fetchJSON} from "./functions/api.js";
import {createElement} from "./functions/dom.js";
console.log("script App is loaded");
try {
    const todos = await fetchJSON(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    console.log("todos => ", todos);
    const list = new TodoList(todos);
    list.appendTo(document.querySelector("#todolist"));

} catch (error) {
    const alertElmt = createElement("div", {
        class: "alert alert-danger m-2",
        role: "alert",
    });
    alertElmt.innerText = "Impossible de charger les données";
    document.body.prepend(alertElmt);
}
