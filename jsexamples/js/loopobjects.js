"use strict";

let layout = [
    {
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        h1: "hello",
        paragraph: "This is random text"
    },
    {
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        h1: "hello",
        paragraph: "This is random text"
    },
    {
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        h1: "hello",
        paragraph: "This is random text"
    },
    {
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        h1: "hello",
        paragraph: "This is random text"
    }
];

let output = document.getElementById("output");

layout.forEach(element => {
    let newDiv = document.createElement("div");
    newDiv.style.width = element.width;
    newDiv.style.height = element.height;
    newDiv.style.backgroundColor = element.backgroundColor;
    newDiv.style.marginBottom = "10px";
    let h1Tag = document.createElement("h1");
    h1Tag.innerHTML = element.h1;
    let pTag = document.createElement("p");
    pTag.innerHTML = element.paragraph;
    newDiv.append(h1Tag, pTag);
    output.append(newDiv);
});
