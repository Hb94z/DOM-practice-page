function generateMenuPage() {



    let content = document.getElementById("content");

    let main = document.createElement("div");
    let footer = document.createElement("footer");
    let blurb = document.createElement("div");
 
    main.className = ("main");
 
    blurb.className = ("blurb");
    blurb.innerHTML = ("menu menu menu");
 
    content.appendChild(main);
    content.appendChild(footer);
    main.appendChild(blurb);
 
}

export { generateMenuPage }