import {createElement} from "../functions/dom.js";

/**
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

export class TodoList {
    /** @type {Todo[]} */

    #todos = [];

    /** @param {Todo[]} todos */

    constructor(todos) {
        this.#todos = todos;
    }

    /** @param {HTMLElement} element */

    appendTo(element) {
        element.innerHTML = `
        <form class="d-flex pb-4">
        <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title" data-com.bitwarden.browser.user-edited="yes">
        <button class="btn btn-primary">Ajouter</button>
    </form>
    <main>
        <div class="btn-group mb-4" role="group">
            <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
            <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
            <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
        </div>

        <ul class="list-group"></ul>
    </main>
    `;
        const list = element.querySelector(".list-group");
        for (const todo of this.#todos) {
            const t = new TodoListItem(todo);
            t.appendTo(list);
        }
    }
}

class TodoListItem {
    #element;

    /** @param {Todo} todo */

    constructor(todo) {
        const id = `todo-${todo.id}`;
        const li = createElement("li", {
            class: "todo list-group-item d-flex align-items-center",
        });

        const checkbox = createElement("input", {
            type: "checkbox",
            id,
            class: "form-check-input",
            checked: todo.completed ? "" : null,
        });

        const label = createElement("label", {
            class: "ms-2 form-check-label",
            for: id,
        });
        label.innerText = todo.title;

        const button = createElement("button", {
            class: "ms-auto btn btn-danger btn-sm",
        });
        button.innerHTML = `<i class="bi-trash"></i>`;

        li.append(checkbox, label, button);

        button.addEventListener("click", (e) => this.remove(e));

        this.#element = li;
    }
    /** @param {HTMLElement} element */
    appendTo(element) {
        element.append(this.#element);
    }

    /** @param {PointerEvent} e */
    remove(e) {
        e.preventDefault();
        this.#element.remove();
    }
}
