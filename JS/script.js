function Password() {
  const createPassDiv = document.createElement("div");
  const pe = 'UGEkJHcwcmQ=';
  createPassDiv.classList.add("passDiv");
  createPassDiv.innerHTML = `
      <input type="password" id="passinput" class="password" placeholder="Enter Password">
    `;
  document.body.appendChild(createPassDiv);

  const inputElement = document.getElementById('passinput');
  console.log(inputElement);
  inputElement.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const ep = btoa(inputElement.value);
      if (ep === pe) {
        console.log("Logged in!");
        inputElement.classList.add("hidden");
      } else {
        console.log("Incorrect password.");
      }
      inputElement.value = "";
    }
  });
}

Password();