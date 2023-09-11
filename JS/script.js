const pk = 'UGFzc3dvcmRWYXJpYWJsZQ'
function checkAndUpdateWebsite() {
  const lg = localStorage.getItem(pk);
  const passDiv = document.querySelector('.passDiv');

  if (lg === null || lg !== "true") {
    if (!passDiv) {
      Password();
    }
  } else {
    if (passDiv) {
      passDiv.remove();
    }
  }
}

function Password() {
  const createPassDiv = document.createElement("div");
  createPassDiv.classList.add("passDiv");
  createPassDiv.innerHTML = `
    <input type="password" id="passinput" class="password">
  `;
  document.body.appendChild(createPassDiv);

  const inputElement = document.getElementById('passinput');
  const pe = 'UGEkJHcwcmQ=';
  inputElement.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const ep = btoa(inputElement.value);
      if (ep !== pe) {
        console.log("Incorrect password.");
        inputElement.value = "";
        return
      }
      inputElement.classList.add("hidden");
      localStorage.setItem(pk, true);
      window.location.reload();
    }
  });
}

checkAndUpdateWebsite();
window.addEventListener("storage", function (e) {
  if (e.key === pk) {
    checkAndUpdateWebsite();
  }
});