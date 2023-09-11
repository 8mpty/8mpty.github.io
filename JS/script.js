const pk = "UGFzc3dvcmRWYXJpYWJsZQ";
function checkAndUpdateWebsite() {
  const lg = sessionStorage.getItem(pk);
  const passDiv = document.querySelector(".passDiv");

  if (lg === null || lg !== "true") {
    if (!passDiv) {
      Password();
    }
  } else {
    if (passDiv) {
      passDiv.remove();
    }
    const mainDiv = document.createElement("div");
    mainDiv.innerHTML = `
        <div class="sidebar">
        <div class="menu">
          <ul>
            <li><a id="home"><i class="fa fa-home" aria-hidden="true"></i></i><span> Home</span></a></li>
            <li><a id="passGen"><i class="fa fa-key" aria-hidden="true"></i><span> Password Generator</span></a></li>
            <li><a id="yta"><i class="fa fa-music" aria-hidden="true"></i><span> YT MP3</span></a></li>
          </ul>
          <ul>
            <li><a id="lo" class="lo"><i class="fa fa-sign-out" aria-hidden="true"></i></a><span> Logout</span></li>
          </ul>
        </div>
        </div>
        <div class="content" style="border: 0px solid;"></div>
      `;
    document.body.appendChild(mainDiv);
  }
}

function Password() {
  const createPassDiv = document.createElement("div");
  createPassDiv.classList.add("passDiv");
  createPassDiv.innerHTML = `
    <input type="password" id="passinput" class="password">
  `;
  document.body.appendChild(createPassDiv);

  const inputElement = document.getElementById("passinput");
  const pe = "UGEkJHcwcmQ=";
  inputElement.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const ep = btoa(inputElement.value);
      if (ep !== pe) {
        console.log("Incorrect password.");
        inputElement.value = "";
        return;
      }
      // inputElement.classList.add("hidden");
      sessionStorage.setItem(pk, true);
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
