import { createElement, checkAndGenerateText } from "./util.js";
const initApp = () => {
    // Initializes the app, registers the button click listener
    const newUserButton = document.querySelector("#btnAddUser");
    newUserButton.addEventListener("click", addUser);
};
const addUser = () => {
    // Fetches the user input, creates a new HTML element based on it
    // and appends the element to the DOM
    const newUserNameInput = document.querySelector("input#name");
    const newUserAgeInput = document.querySelector("input#age");
    const userList = document.querySelector(".user-list");
    const outputText = checkAndGenerateText(newUserNameInput.value, newUserAgeInput.value);
    if (!outputText) {
        return;
    }
    const element = createElement("li", outputText, "user-item");
    userList === null || userList === void 0 ? void 0 : userList.appendChild(element);
};
// Start the app!
initApp();
