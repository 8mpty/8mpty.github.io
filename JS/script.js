function Password() {
  const createPassDiv = document.createElement("div");
  createPassDiv.classList.add("passDiv");
  createPassDiv.innerHTML = `
      <input type="text" id="input" class="password" placeholder="Enter Password">
    `;
  document.body.appendChild(createPassDiv);
  console.log("called here");
}

Password();