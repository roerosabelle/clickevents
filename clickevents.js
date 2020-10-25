let buttonFoo = document.getElementById("b1"); 
buttonFoo.addEventListener("click", () => {
    const main = document.querySelector('main');
    const fooHeader = document.createElement('h3');
    fooHeader.textContent = "Foo"
    main.appendChild(fooHeader);
})

let buttonBar = document.getElementById("b2"); 
buttonBar.addEventListener("click", () => {
    const main = document.querySelector('main');
    const barHeader = document.createElement('h3');
    barHeader.textContent = "Bar"
    main.appendChild(barHeader);
})

let buttonFooBar = document.getElementById("b3"); 
buttonFooBar.addEventListener("click", () => {
    const main = document.querySelector('main');
    const fooBarHeader = document.createElement('h2');
    fooBarHeader.textContent = "FooBar"
    main.appendChild(fooBarHeader);
})