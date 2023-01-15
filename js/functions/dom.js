/**
* @param {string} tagName
* @param {object} attributes
* @return {HTMLElement}
 */

export function createElement(tagName, attributes = {}) {
    const element = document.createElement(tagName);
    for (const [attributeName, value] of Object.entries(attributes)) {
        // Ajouter des attributs à l'élément avec le nom de l'attribut et sa valeur
        element.setAttribute(attributeName, value);
    }
    return element;
}
