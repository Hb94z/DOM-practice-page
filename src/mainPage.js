
function initialRender () {

    let content = document.getElementById("content");

    let main = document.createElement("div");
    let footer = document.createElement("footer");
    let blurb = document.createElement("div");
 
    main.className = ("main");
 
    blurb.className = ("blurb");
    blurb.innerHTML = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
 
    content.appendChild(main);
    content.appendChild(footer);
    main.appendChild(blurb);
 
}
    export { initialRender };