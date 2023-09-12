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
        </div>
          <ul class="logout">
            <li><a id="lo" class="lo"><i class="fa fa-sign-out" aria-hidden="true"></i></a><span> Logout</span></li>
          </ul>
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
    <form autocomplete="off">
      <input type="password" id="passinput" class="password">
    </form>
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

function generateRandomCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789'
  let amt = 15;
  let code = '';

  let chars = '';
  chars += characters;
  chars += digits

  for (let i = 0; i < (amt); i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    code += chars.substring(randomIndex, randomIndex + 1);
  }

  return code;
}
const asd = generateRandomCode();
console.log(asd);