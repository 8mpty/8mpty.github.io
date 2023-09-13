const homeL = document.getElementById("home");
const passG = document.getElementById("passGen");
const yta = document.getElementById("yta");
const lo = document.getElementById("lo");
const dct = document.querySelector("#dct");

const contentDiv = document.querySelector(".content");

homeL.addEventListener("click", () => {
  const go = document.querySelector(".generatedObject");
  go.remove();
});

passG.addEventListener("click", () => {
  const go = document.querySelector(".generatedObject");
  if (go) {
    go.remove();
  }
  ObjectCreator(
    "genOb",
    "https://8mpty.github.io/Password-Generator/",
    100,
    80,
    "overflow:auto;"
  );
});

yta.addEventListener("click", () => {
  const go = document.querySelector(".generatedObject");
  if (go) {
    go.remove();
  }
  ObjectCreator(
    "yta",
    "https://8mpty.github.io/YT_MP3_Downloader/",
    100,
    80,
    "overflow:auto;"
  );
});

dct.addEventListener("click", () => {
  const go = document.querySelector(".generatedObject");
  if (go) {
    go.remove();
  }
  ObjectCreator(
    "dct",
    "https://8mpty.github.io/Double-Click-Test/",
    100,
    80,
    "overflow:auto;"
  );
});

lo.addEventListener("click", () => {
  sessionStorage.removeItem("UGFzc3dvcmRWYXJpYWJsZQ");
  window.location.reload();
});

function ObjectCreator(ob, link, width, height, styles) {
  const cob = document.querySelector(`.${ob}`);
  if (!cob) {
    const createOb = document.createElement("object");
    createOb.classList.add(ob);
    createOb.classList.add("generatedObject");
    createOb.type = "text/html";
    createOb.data = link;
    createOb.width = `${width}%`;
    createOb.height = `${height}%`;
    createOb.style = styles;
    contentDiv.appendChild(createOb);
  } else {
    cob.remove();
  }
}
