const colours = [
  "red",
  "green",
  "blue",
  "orange",
  "lime",
  "olive",
  "black",
  "yellow",
];
console.log(colours);

const buildP = (placeholder, num) => {
  let i = 0;
  do {
    const p = document.createElement("p");
    const textNode = document.createTextNode("This is my new text node!");
    p.style.color = colours[parseInt(Math.random() * colours.length)];
    p.appendChild(textNode);
    placeholder.appendChild(p);
    i++;
  } while (i < num);
};
const placeholder = document.querySelector("#placeholder");
buildP(placeholder, 20);
